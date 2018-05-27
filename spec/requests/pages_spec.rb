require 'rails_helper'

RSpec.describe 'Pages', type: :request do
  let(:headers) do
    {
      'CONTENT_TYPE' => 'application/json',
      'ACCEPT' => 'application/json'
    }
  end

  describe 'GET /products/:id' do
    context '権限がある場合' do
      let!(:product) do
        create(:product,
               title: 'テストのタイトル',
               privacy_level: :public_open)
      end

      let!(:page) do
        create(:page,
               product: product,
               title: 'テストのページタイトル',
               content: '本文ですよ本文ですよ本文ですよ本文ですよ')
      end

      it 'レスポンスが返ること' do
        get api_v1_product_page_path(product, page), headers: headers
        expect(response).to have_http_status(:ok)
      end

      it 'jsonが取得できること' do
        get api_v1_product_page_path(product, page), headers: headers
        expect(response.content_type).to eq('application/json')
      end

      it '内容が取得できること' do
        get api_v1_product_page_path(product, page), headers: headers

        expect(json['page']['product']['title']).to eq('テストのタイトル')
        expect(json['page']['pageTitle']).to eq('テストのページタイトル')
        expect(json['page']['content']).to eq("<p>本文ですよ本文ですよ本文ですよ本文ですよ</p>\n")
      end

      it '閲覧履歴がカウントされること' do
        expect do
          get api_v1_product_page_path(product, page), headers: headers
        end.to change { page.reload.impressionist_count }.by(1)
      end

      it '作品の閲覧履歴がカウントされること' do
        expect do
          get api_v1_product_page_path(product, page), headers: headers
        end.to change { product.reload.impressionist_count }.by(1)
      end
    end

    context '権限がない場合' do
      it 'リダイレクトされること'
    end
  end

  describe '#destroy' do
    context '権限がある場合' do
      let(:product) { create(:product, user: user) }
      let!(:page) { create(:page, product: product) }
      let(:user) { create(:user) }

      before do
        sign_in user
      end

      it '削除できること' do
        expect do
          delete api_v1_product_page_path(product, page),
                 headers: headers
        end.to change(Page, :count).by(-1)
      end

      it 'エラーメッセージが返ること' do
        product.pages.delete_all
        last_page = create(:page, product: product)
        delete api_v1_product_page_path(product, last_page),
               headers: headers
        expect(response.body).to match(/最後のページは削除できません。/)
      end
    end

    context '権限がない場合' do
      it 'リダイレクトされること'
    end
  end
end
