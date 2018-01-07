# Omniauth Callback with Devise
class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  require 'timeout'

  def callback_for_all_providers
    error_redirect if request.env['omniauth.auth'].blank?

    provider = __callee__.to_s
    auth = request.env['omniauth.auth']
    user, _policy = User.find_for_oauth(auth)

    if user.persisted?
      sign_in_user_with_oauth(provider, user)
    else
      failure_sign_in_user_with_oauth
    end
  end

  private

  # def store_api_access_token(policy, auth)
  #   session[:twitter_access_token] = policy.credentials["token"]
  #   session[:twitter_access_secret] = policy.credentials["secret"]
  # end

  def error_redirect
    flash[:danger] = 'Authentication data was not provided'
    redirect_to root_url and return
  end

  def sign_in_user_with_oauth(provider, user)
    # store_api_access_token(policy, auth)
    # update_permissions_lists(policy, user)
    sign_in_and_redirect user, event: :authentication
    set_flash_message(:notice, :success, kind: provider.capitalize)
  end

  def failure_sign_in_user_with_oauth
    flash[:warning] = 'ログインに失敗しました。'
    redirect_to new_user_registration_url
  end

  # def update_permissions_lists(policy, user)
  #   factory = ListFactory.new(user,
  #                             access_token: policy.credentials['token'],
  #                             access_secret: policy.credentials['secret'])
  #   Timeout.timeout(120) do
  #     factory.fetch_lists_from_twitter
  #   end
  # rescue Timeout::Error
  #   logger.error 'List fetching too much time...'
  # end

  alias twitter callback_for_all_providers
end
