# ログインテスト用のヘルパ
module RequestHelper
  include Warden::Test::Helpers
  def self.included(base)
    base.before(:each) { Warden.test_mode! }
    base.after(:each) { Warden.test_reset! }
  end

  def sign_in(resource)
    login_as(resource, scope: warden_scope(resource))
  end

  def sign_out(resource)
    logout(warden_scope(resource))
  end

  def json
    JSON.parse(response.body)
  end

  def set_omniauth_twitter_mock
    OmniAuth.config.mock_auth[:twitter] =
      OmniAuth::AuthHash.new(provider: 'twitter',
                             uid: '123545')
    # etc.
  end

  def set_omniauth_twitter_failure_mock
    OmniAuth.config.mock_auth[:twitter] = :invalid_credentials
  end

  private

  def warden_scope(resource)
    resource.class.name.underscore.to_sym
  end
end
