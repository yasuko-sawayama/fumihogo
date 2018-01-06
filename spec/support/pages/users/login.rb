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
end
