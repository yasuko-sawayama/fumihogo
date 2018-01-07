# ログインテスト用のヘルパ
module RequestHelper
  include Warden::Test::Helpers

  def set_omniauth_twitter_mock
    OmniAuth.config.mock_auth[:twitter] =
      OmniAuth::AuthHash.new(provider: 'twitter',
                             uid: '123545')
    # etc.
  end

  def set_omniauth_twitter_failure_mock
    OmniAuth.config.mock_auth[:twitter] = :invalid_credentials
  end
end
