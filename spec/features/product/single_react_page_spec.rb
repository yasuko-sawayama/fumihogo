require 'rails_helper'

RSpec.feature 'Single react page', type: :feature do
  describe 'Product Details Viewing', :js do
    let!(:product) { create(:product, title: 'タイトル') }

    it 'タイトル表示できること' do
      visit product_path(product)
      expect(page).to have_content('タイトル')
    end
  end
end
