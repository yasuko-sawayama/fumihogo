require "rails_helper"

RSpec.feature '作品を作成する', type: :feature do
  scenario '初めて作品を投稿する' do
    login_user

    visit new_product_path
    expect(page).to have_content('新規作成')

    fill_in 'タイトル', with: '最新のタイトル'
    fill_in '概要', with: 'それっぽい概要'
    select '公開', from: '公開範囲'
    fill_in 'タイトル', with: 'ページのタイトル'
  end
end
