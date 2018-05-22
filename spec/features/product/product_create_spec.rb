require 'rails_helper'

RSpec.feature '作品を作成する', type: :feature do
  before { login_user }

  scenario ' 初めて作品を投稿する', :js do
    click_link '新しい小説を書く'

    # 最初はコンパイルが走るので長めに取る
    expect(page).to have_content('新規作成', wait: 10)

    within(:css, '#productInfo') do
      fill_in 'title', with: '最新のタイトル'
      fill_in 'description', with: 'それっぽい概要'
      select '公開', from: 'privacy_level'
    end

    within(:css, '#pageInfo') do
      fill_in 'pageTitle', with: 'ページのタイトル'
    end

    editor_set_text 'ページの中身は最低10文字以上必要です。'

    click_button '新しい小説を作成する'

    sleep 3
    expect(Product.find_by(title: '最新のタイトル')).not_to be_nil
    expect(page).to have_content('新しい小説を作成しました')
    expect(page).to have_css('h2', text: '最新のタイトル')
  end

  scenario '作品の投稿に失敗するとエラーメッセージが表示される', :js
  scenario 'ログアウトした状態で投稿しようとするとエラーメッセージが表示される', :js
end
