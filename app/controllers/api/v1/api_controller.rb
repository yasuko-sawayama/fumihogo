class Api::V1::ApiController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActionController::InvalidAuthenticityToken, with: :render_invalid_http

  protected

  def user_not_authorized
    render json: { status: 'error',
                   errors: { auth: '権限がありません。' } },
           status: :unauthorized
  end

  def render_unprocessable_entity_response(exception)
    render json: { status: 'error',
                   errors: exception.record.errors },
           status: :unprocessable_entity
  end

  def render_not_found_response(exception)
    render json: { errors: exception.message }, status: :not_found
  end

  def render_invalid_http(_exception)
    render json: { errors: { auth: 'リロードしなおしてください。' } },
           status: :unauthorized
  end
end
