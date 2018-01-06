class SignUp < SitePrism::Page
  set_url '/users/sign_up'

  element :email, "input[name='user[email]']"
  element :nickname, "input[name='user[nickname]']"
  element :password, "input[name='user[password]']"
  element :password_confirmation, "input[name='user[password_confirmation]']"
  element :sign_up_button, "input[name='commit']"

  def sign_up!(current_email = nil, current_nickname = nil, current_password = nil)
    email.set(current_email)
    nickname.set(current_nickname)
    password.set(current_password)
    password_confirmation.set(current_password)
    sign_up_button.click
  end
end
