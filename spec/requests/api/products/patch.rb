require 'rails_helper'

RSpec.describe 'PATCH /products/:id/ products update', type: :request do
  let(:headers) do
    {
      'CONTENT_TYPE' => 'application/json',
      'ACCEPT' => 'application/json'
    }
  end

  subject(:update) { patch api_vi_product_path(product), headers: headers }

  context '権限がある場合' do
    
  end

  context '権限がない場合' do
    let(:product) do
      create(:product,
             title: 'テストのタイトル',
             privacy_level: :public_open)
    end

    it '401が返ること' do
      update
      expect(responts).to have_http_status(:unauthorized)
    end

    it 'エラーメッセージがかえること' do
      update
      expect(json['errors']['auth']).to eq('権限がありません。')
    end
  end
end
