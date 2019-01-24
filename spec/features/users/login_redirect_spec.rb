require 'rails_helper'

xdescribe 'サインイン時のリダイレクト', type: :feature do
  let(:user) { create(:user) }
  let!(:product) { create(:product, title: '野生の王国', privacy_level: :login) }

  let(:login_page) { Login.new }
  let(:product_page) { Product::Show.new }

  before { product_page.load(product_id: product.id) }

  describe 'ログインせずにログイン限定作品ページにアクセスした場合', :js do
    scenario 'エラーページにリダイレクトされる。' do
      expect(page).to have_content('ログインする')
    end

    scenario 'ログイン後、対象の作品ページにリダイレクトされる。' do
      login_page.login(user.email, user.password)
      visit product_path(product)

      expect(page).to have_content('野生の王国')
    end
  end
end
