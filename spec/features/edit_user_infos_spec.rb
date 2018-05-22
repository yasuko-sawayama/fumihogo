require 'rails_helper'

RSpec.feature 'ユーザー情報編集', type: :feature do
  let(:edit_page) { Edit.new }
  let(:login_page) { Login.new }

  context 'ログインしていない場合' do
    scenario 'ログインページにリダイレクトされる' do
      edit_page.load
      expect(current_url).to eq(user_session_url)
    end
  end

  context 'メールアドレスで登録した場合' do
    let(:user) { create(:user, nickname: 'スズキ') }

    background do
      login_page.login(user.email, user.password)
    end

    scenario 'メールアドレスを変更する' do
      edit_page.load
      expect(page).to have_content('ログイン情報の変更')
      expect(page.find_field('メールアドレス').value).to eq(user.email)

      edit_page.edit_email('aiueo@test.com')
      expect(page).to have_content('アカウント情報を変更しました。登録されたメールアドレスに確認用メールを送信しています。リンクをクリックして本人確認を行って下さい。')
      open_email('aiueo@test.com')
      expect(current_email).to have_content('スズキ')
      current_email.click_link 'アカウント確認'
      expect(page).to have_content('アカウントを登録しました。')

      edit_page.load
      expect(page.find_field('メールアドレス').value).to eq('aiueo@test.com')
    end
  end

  context 'Twitterでログインしている場合' do
    background { login_page.login_with_twitter!(twitter_name: 'testname') }

    scenario 'Twitter連携で作成したユーザーのメールを登録する' do
      edit_page.load
      expect(page).to have_content('ログイン情報の変更')
      # Twitterの場合はダミーアドレスで入力しているので表示前に消す
      expect(page.find_field("\xE3\x83\xA1\xE3\x83\xBC\xE3\x83\xAB\xE3\x82\xA2\xE3\x83\x89\xE3\x83\xAC\xE3\x82\xB9").value).to eq('')

      edit_page.edit_email('test@test.com')

      expect(page).to have_content('アカウント情報を変更しました。登録されたメールアドレスに確認用メールを送信しています。リンクをクリックして本人確認を行って下さい。')
      open_email('test@test.com')
      expect(current_email).to have_content('testname')
      current_email.click_link 'アカウント確認'
      expect(page).to have_content('アカウントを登録しました。')
      edit_page.load
      expect(page.find_field('メールアドレス').value).to eq('test@test.com')
    end
  end
end
