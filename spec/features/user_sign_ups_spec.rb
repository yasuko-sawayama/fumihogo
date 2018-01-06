require 'rails_helper'

RSpec.feature 'ユーザー登録', type: :feature do
  let!(:sign_up_page) { SignUp.new }
  let!(:login_page) { Login.new }

  context '既にログインしている場合' do
    before do
      user = create(:user)
      login_page.login(user.email, user.password)
    end

    scenario 'ユーザー登録できない。' do
      sign_up_page.load
      expect(page).to have_content('すでにログインしています。')
    end
  end

  context 'emailで登録する場合：' do
    scenario 'ユーザー登録に成功する' do
      sign_up_page.load
      sign_up_page.sign_up!('test@email.com', 'nickname', 'password')

      expect(page).to have_content('本人確認用のメールを送信しました。メール内のリンクからアカウントを有効にしてください。')

      confirm_user('test@email.com')

      login_page.login('test@email.com', 'password')
      expect(page).to have_content('ログインしました。')
    end

    context '登録に失敗する' do
      scenario 'メールアドレスが重複している' do
        user = create(:user, email: 'test@test.com')

        sign_up_page.load
        sign_up_page.sign_up!(user.email, 'other nickname', 'otherpassword')

        expect(page).to have_content('メールアドレスは既に使用されています。')

        login_page.login(user.email, 'otherpassword')
        expect(page).to have_content('正しくありません')
      end

      scenario 'ニックネームが重複している' do
        user = create(:user, nickname: 'nickname')

        sign_up_page.load
        sign_up_page.sign_up!('test@test.com', user.nickname, 'otherpassword')

        expect(page).to have_content('表示名は既に使用されています。')

        login_page.login('test@test.com', 'otherpassword')
        expect(page).to have_content('メールアドレスが登録されていません。')
      end
    end
  end

  def confirm_user(email)
    user = User.find_by(email: email)
    user.confirm
    user.save!
  end
end
