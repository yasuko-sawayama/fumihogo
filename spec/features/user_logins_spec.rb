require 'rails_helper'

RSpec.feature 'User login with email address', type: :feature do
  let!(:user) do
    create :user,
           nickname: 'すずき',
           password: 'password',
           password_confirmation: 'password'
  end

  let!(:login_page) { Login.new }

  scenario 'ログインに成功する' do
    login_page.login(user.email, user.password)
    expect(page).to have_content('ログインしました。')
  end

  scenario 'ログインに失敗する' do
    login_page.login(user.email, 'invalid password')
    expect(page).to have_content('メールアドレスとパスワードの組み合わせが正しくありません')
  end
end
