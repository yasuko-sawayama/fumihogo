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
               privacy_level: :public_open)
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

      it 'ページリストが取得できること' do
        create_list(:page, 5, product: product)
        get api_v1_product_path(product), headers: headers
        expect(json['product']['pages'].length).to eq(6)
      end
    end

    context '権限がない場合' do
      let(:product) do
        create(:product,
               privacy_level: :closed)
      end

      it '401がかえること' do
        get api_v1_product_path(product), headers: headers
        expect(response).to have_http_status(401)
      end

      it 'エラーメッセージがかえること' do
        get api_v1_product_path(product), headers: headers
        expect(json['errors']['auth']).to eq('権限がありません。')
      end
    end
  end

  describe "POST /api/v1/products" do
    subject { post '/api/v1/products', params: { product: product_params } }

    context '権限がある場合' do
      let(:user) { create(:user) }

      before { sign_in(user) }

      context 'パラメーターが正しい場合' do
        let(:product_params) do
          attributes_for(:product).merge(pages_attributes: [attributes_for(:page, product: nil)])
        end
        
        it '200が帰ること' do
          subject
          expect(response).to be_success
        end

        it '作品が1増えること' do
          expect { subject }.to change(Product, :count).by(1)
        end

        it '最初のページが作成されていること' do
          subject
          expect(
            Product.find_by(title: product_params[:title]).pages.count
          ).to eq(1)
        end
      end

      context '不正なパラメーターの場合' do
        let(:product_params) { attributes_for(:product, title: nil) }

        it '422がかえること' do
          subject
          expect(response.status).to eq(422)
        end

        it 'エラーメッセージ' do
          subject
          body = JSON.parse(response.body)
          p body
          expect(body["errors"].to_s).to include('を入力してください')
        end

        it '作品が増えないこと' do
          expect { subject }.not_to change(Product, :count)
        end
      end
    end

    context '権限がない場合' do
      let(:product_params) do
        attributes_for(:product).merge(pages_attributes: [attributes_for(:page, product: nil)])
      end

      it '401がかえること' do
        subject
        expect(response).to have_http_status(401)
      end

      it '作品が増えないこと' do
        expect { subject }.not_to change(Product, :count)
      end

      it 'エラーメッセージ' do
        subject
        body = JSON.parse(response.body)
        p body
        expect(body['errors']['auth']).to match('権限がありません')
      end
    end
  end
end
