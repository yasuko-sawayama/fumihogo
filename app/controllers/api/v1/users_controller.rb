class Api::V1::UsersController < Api::V1::ApiController
  skip_after_action :verify_authorized

  def current_user_info
    head :unauthorized and return unless user_signed_in?
    
    @user = current_user
  end
end
