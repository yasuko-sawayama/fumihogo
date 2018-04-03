require "rails_helper"

RSpec.describe 'Pages', type: :request do
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

      let(:page) do
        create(:page,
               product: product,
               title: 'テストのページタイトル',
               content: '本文ですよ本文ですよ本文ですよ本文ですよ')
      end

      it "レスポンスが返ること" do
        get api_v1_product_page_path(product, page), headers: headers
        expect(response).to have_http_status(200)
      end

      it 'jsonが取得できること' do
        get api_v1_product_page_path(product, page), headers: headers
        expect(response.content_type).to eq("application/json")
      end

      it '内容が取得できること' do
        get api_v1_product_page_path(product, page), headers: headers
        p json
        expect(json['page']['product']['title']).to eq('テストのタイトル')
        expect(json['page']['title']).to eq('テストのページタイトル')
        expect(json['page']['content']).to eq('本文ですよ本文ですよ本文ですよ本文ですよ')
      end
    end

    context '権限がない場合' do
      
    end
  end
end
