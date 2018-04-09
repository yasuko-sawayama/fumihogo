require "rails_helper"

RSpec.feature '作品を作成する', type: :feature do
  before { login_user }

  scenario '初めて作品を投稿する', :js do
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

    expect(Product.find_by(title: '最新のタイトル')).not_to be_nil
  end
end

