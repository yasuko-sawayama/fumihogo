require 'rails_helper'

RSpec.describe "お気に入りAPI" do
  let(:headers) do
    {
        'CONTENT_TYPE' => 'application/json',
        'ACCEPT' => 'application/json'
    }
  end

  describe "GET /api/v1/likes/" do
    let(:product) do
      create(:product,
             title: 'テストのタイトル',
             privacy_level: :public_open)
    end

    let(:other_product) {create(:product, privacy_level: :public_open)}

    let(:user) {create(:user)}

    describe "ログインしている場合" do
      before do
        sign_in user
        product.liked_by user
      end

      it 'レスポンスが返ること' do
        get api_v1_likes_path, headers: headers
        expect(response).to have_http_status(:ok)
      end

      context '一つだけ' do
        it 'お気に入りに追加している作品が取得できること' do
          get api_v1_likes_path, headers: headers
          expect(json['likes']['products'].first['title']).to eq('テストのタイトル')
        end
      end

      context '複数' do
        before {other_product.liked_by user}

        it 'お気に入りが増えること' do
          get api_v1_likes_path, headers: headers
          expect(json['likes']['products'].length).to eq(2)
        end
      end

      it '非公開の作品は取得できないこと' do
        product.update(privacy_level: :closed)
        get api_v1_likes_path, headers: headers
        expect(json['likes']['products'].length).to eq(0)
      end
    end

    describe "ログインしていない場合" do
      it "エラーになること" do
        get api_v1_likes_path, headers: headers
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end