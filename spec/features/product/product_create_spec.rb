require "rails_helper"

RSpec.feature '作品を作成する', type: :feature do
  scenario '初めて作品を投稿する', :js do
    login_user

    click_link '新しい小説を書く'

    expect(page).to have_content('新規作成', wait: 10)

    within(:css, '#productInfo') do
      fill_in 'title', with: '最新のタイトル'
      fill_in 'description', with: 'それっぽい概要'
      select '公開', from: 'privacy_level'
    end

    within(:css, '#pageInfo') do
      fill_in 'pageTitle', with: 'ページのタイトル'
     
    end
    press('[data-text="true"]',  <<EOC
ページの中身は最低10文字以上必要です。
EOC
)
    click_button '新しい小説を作成する'

    sleep 3
    expect(Product.find_by(title: '最新のタイトル')).not_to be_nil      
  end
end

def press(finder, code)
  keypress_script = <<EOS
document.querySelector('br[data-text="true"]').remove();
document.querySelector('.public-DraftStyleDefault-block').querySelector('span').insertAdjacentHTML('afterbegin', '<span data-text="true">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>');
EOS
  page.driver.browser.execute_script(keypress_script)
end
