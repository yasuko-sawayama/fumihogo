require 'rails_helper'

RSpec.describe "Products", type: :request do
  let(:headers) {{
    "CONTENT_TYPE" => "application/json",
    "ACCEPT" => "application/json"
 }}

  describe "GET /products/:id" do
    context '権限がある場合' do
      let(:product) do
        create(:product,
               title: 'テストのタイトル',
               privacy_level: Product.privacy_levels[:open])
      end

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
        expect(json['product']['title']).to eq('テストのタイトル')
      end
    end

    context '権限がない場合' do
      let(:product) do
        create(:product,
               privacy_level: Product.privacy_levels[:closed])
      end

      it 'リダイレクトされること' do
        get api_v1_product_path(product), headers: headers
        expect(response).to redirect_to(root_path)
        expect(flash[:alert]).to include('このページを表示する権限がありません。')
      end
    end
  end
end
