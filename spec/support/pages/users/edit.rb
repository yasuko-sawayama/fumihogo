class Edit < SitePrism::Page
  set_url '/users/edit'

  element :email, "input[name='user[email]']"
  element :nickname, "input[name='user[nickname]']"
  element :password, "input[name='user[password]']"
  element :password_confirmation, "input[name='user[password_confirmation]']"
  element :submit_button, "input[name='commit']"

  def edit_email(new_email)
    email.set(new_email)
    submit_button.click
  end
    
  def submit!
    submit_button.click
  end
end
