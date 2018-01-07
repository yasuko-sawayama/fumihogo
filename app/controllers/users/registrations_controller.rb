# Deviseの登録コントローラーカスタマイズ
class Users::RegistrationsController < Devise::RegistrationsController
  # GET /resource/edit
  def edit
    resource.email = '' if resource.email.include?('example.com')
    render :edit
  end

  protected

  def update_resource(resource, params)
    resource.update_without_password(params)
  end

  private

  def sign_up_params
    params.require(:user).permit(:nickname,
                                 :email,
                                 :password,
                                 :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:nickname, :email,
                                 :password, :password_confirmation)
  end
end
