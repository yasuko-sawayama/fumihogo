require 'rails_helper'

RSpec.describe "Products", type: :request do
  let(:headers) {{
    "CONTENT_TYPE" => "application/json",
    "ACCEPT" => "application/json"
 }}

  describe "GET /products/:id" do
    let(:product) { create(:product, title: 'テストのタイトル') }

    context '権限がある場合' do
      it "レスポンスが返ること" do
        get api_v1_product_path(product), headers: headers
        expect(response).to have_http_status(200)
      end

      it 'jsonが取得できること' do
        get api_v1_product_path(product), headers: headers
        expect(response.content_type).to eq("application/json")
      end

      it 'タイトルが取得できること' do
        get api_v1_product_path(product), headers: headers
        expect(response.body).to include('テストのタイトル')
      end
    end

    context '権限がない場合' do
      it 'リダイレクトされること'
    end
  end
end
