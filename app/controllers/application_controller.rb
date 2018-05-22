class ApplicationController < ActionController::Base
  include Pundit

  after_action :verify_authorized, except: :index, unless: :auth_skipping_controllers?
  after_action :verify_policy_scoped, only: :index, unless: :auth_skipping_controllers?

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  rescue_from ActionController::InvalidAuthenticityToken, with: :reload_to_root

  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  # Draperでdecorate
  def current_user
    UserDecorator.decorate(super) unless super.nil?
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  end

  def user_not_authorized
    flash[:alert] = 'このページを表示する権限がありません。'
    redirect_to root_path
  end

  def store_location_for_user!
    store_location_for(:user, request.fullpath)
  end

  private

  # Punditの検証を行わないコントローラ
  def auth_skipping_controllers?
    devise_controller? || high_voltage_controller?
  end

  def high_voltage_controller?
    self.class.include?(HighVoltage::StaticPage)
  end

  def reload_to_root
    flash[:alert] = '前回のアクセスから時間が経ちすぎたかもしれません。'
    redirect_to root_path
  end
end
