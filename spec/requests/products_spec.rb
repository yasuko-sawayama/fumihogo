require 'rails_helper'

RSpec.describe 'Products', type: :request do
  describe 'GET /products/:id' do
    let(:user) { create(:user) }

    context '権限がない場合' do
      context '非公開の場合' do
        let(:product) do
          create(:product,
                 privacy_level: :closed)
        end

        before { sign_in user }

        it 'エラーメッセージが表示されること' do
          get product_path(product)
          expect(response).to redirect_to(not_authorized_product_path(product))
          follow_redirect!
          expect(response.body).to include('この作品は非公開です。')
        end
      end

      context 'リスト限定公開の場合' do
        let(:product) do
          create(:product,
                 privacy_level: :list,
                 permissions_list: create(:permissions_list))
        end

        before { sign_in user }

        it 'エラーメッセージが表示されること' do
          get product_path(product)
          expect(response).to redirect_to(not_authorized_product_path(product))
          follow_redirect!
          expect(response.body).to include('この作品はリスト限定公開です。')
        end
      end
    end
  end

  describe "お気に入り" do
    context "ログインしていない場合" do
      post product_like_path(product)
      expect(response).to redirect_to(root_path)
    end
  end
end
