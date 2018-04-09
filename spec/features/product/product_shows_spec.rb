require 'rails_helper'

describe 'product shows details', type: :feature do
  describe 'Product Details Viewing', :js do
    let(:product) do
      build(:product,
            title: '作品タイトル',
            description: '説明文ですよ',
            privacy_level: 'public_open'
           )
    end

    before do
      product.pages.delete_all
      product.pages << build(:page,
                              title: 'ページタイトル',
                              content: '本文内容ですよ本文内容ですよ本文内容ですよ本文内容ですよ',
                              product: product)
      product.save!
    end

    it '表示できること' do
      visit product_path(product)
      expect(page).to have_content('作品タイトル')
      expect(page).to have_content('説明文ですよ')
      expect(page).to have_content('公開')
      expect(page).to have_content('ページタイトル')
      expect(page).to have_content('本文内容ですよ本文内容ですよ本文内容ですよ本文内容ですよ')
    end
  end
end
