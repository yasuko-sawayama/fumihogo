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

  describe "POST /api/v1/products" do
    context '権限がある場合' do
      let(:user) { create(:user) }

      before { sign_in(user) }
      subject { post '/api/v1/products', params: { product: params } }

      context 'パラメーターが正しい場合' do
        let(:params) { attributes_for(:product) }
        
        it '200が帰ること' do
          subject
          expect(response).to be_success
        end

        it '作品が1増えること' do
          expect { subject }.to change(Product, :count).by(1)
        end
      end

      context '不正なパラメーターの場合'
    end
    context '権限がない場合'
  end
end
