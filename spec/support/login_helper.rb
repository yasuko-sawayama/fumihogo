module LoginHelper
  def login_user
    password = SecureRandom.hex(8)
    user = FactoryBot.create(:user,
                             password: password,
                             password_confirmation: password)

    visit new_user_session_path
    fill_in 'メールアドレス', with: user.email
    fill_in 'パスワード', with: password
    click_button 'ログイン'

    expect(page).to have_content('ログインしました')
  end
end
