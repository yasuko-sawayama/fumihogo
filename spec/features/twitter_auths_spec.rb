require 'rails_helper'

# RSpec.feature 'user can login with twitter', type: :feature do
#   context 'ログインに成功する場合：' do
#     let(:login_page) { Login.new }
#
#     context '新規登録:' do
#       scenario 'そのままログインできる' do
#         login_page.login_with_twitter!
#         expect(page).to have_content('ログインしました')
#       end
#
#       scenario 'ニックネームにTwitter表示名が設定されている' do
#         login_page.login_with_twitter!(twitter_name: 'myname')
#         expect(page).to have_content('ログインしました')
#         expect(page).to have_content('myname')
#       end
#     end
#
#     scenario '登録済みであればそのままログインできる' do
#       login_page.login_with_twitter!
#       login_page.logout
#       expect(page).to have_content('ログアウトしました')
#
#       login_page.login_with_twitter!
#       expect(page).to have_content('ログインしました')
#     end
#   end
# end
