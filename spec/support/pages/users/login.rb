class Login < SitePrism::Page
  set_url '/users/sign_in'

  element :email, "input[name='user[email]']"
  element :password, "input[name='user[password]']"
  element :login_button, "input[name='commit']"

  def login(current_email = nil, current_password = nil)
    load
    email.set(current_email)
    password.set(current_password)
    login_button.click
  end

  def login_with_twitter!(twitter_name: nil)
    load
    set_omniauth_twitter_mock(twitter_name: twitter_name)
    click_on 'Twitterでログインする'
  end

  def logout
    visit '/'
    click_on 'ログアウト'
  end

  private

  def set_omniauth_twitter_mock(twitter_name: nil)
    OmniAuth.config.mock_auth[:twitter] =
      OmniAuth::AuthHash.new(
        'provider' => 'twitter',
        'uid'  => 'mock_uid_1234',
        'info' => {
          'name' => 'Mock User',
          'nickname' => "#{twitter_name.blank? ? 'Mock User' : twitter_name}",
          'image' => 'http://mock_image_url.com',
          'description' => 'mock description',
          'urls' => {
            'twitter' => 'http://twitter.com/mock'
          }
        },
        'credentials' => {
          'token'  => 'mock_credentials_token',
          'secret' => 'mock_credentials_secret'
        },
        'extra' => {
          'raw_info' => {
            'name' => 'Mock User',
            'id'   => 'mock_uid_1234'
          }
        }
      )
  end
end
