require 'rails_helper'

RSpec.feature 'User login with email address', type: :feature do
  let(:user) do
    create :user,
           nickname: 'すずき',
           password: 'password',
           password_confirmation: 'password'
  end

  scenario 'Eメールでログインする' do
    visit user_session_path
    fill_in 'Eメール', with: user.email
    fill_in 'パスワード', with: 'password'
    click_on 'Log in'

    screenshot_and_open_image
  end
end
