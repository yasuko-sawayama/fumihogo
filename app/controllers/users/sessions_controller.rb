# ログイン後のパス書き換えのためオーバーライド
class Users::SessionsController < Devise::SessionsController
  protected

  def after_sign_in_path_for(resource)
    request.env['omniauth.origin'] ||
      stored_location_for(resource) ||
      request.referer ||
      root_path
  end
end
