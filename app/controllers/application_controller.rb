class ApplicationController < ActionController::Base
  include Pundit

  after_action :verify_authorized, except: :index, unless: :auth_skipping_controllers?
  after_action :verify_policy_scoped, only: :index, unless: :auth_skipping_controllers?

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  end

  private

  def user_not_authorized
    flash[:alert] = 'このページを表示する権限がありません。'
    redirect_to(request.referer || root_path)
  end

  # Punditの検証を行わないコントローラ
  def auth_skipping_controllers?
    devise_controller? || high_voltage_controller?
  end

  def high_voltage_controller?
    self.class.include?(HighVoltage::StaticPage)
  end
end
