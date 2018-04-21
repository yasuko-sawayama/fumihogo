require "rails_helper"

RSpec.describe 'Users', type: :request do
  let(:headers) {{
                   "CONTENT_TYPE" => "application/json",
                   "ACCEPT" => "application/json"
                 }}

  describe 'GET current_user_info' do
    context 'ログインしている場合' do
      let(:list_id) { 818095242884714497 }
      let(:user) { create(:user) }
      before do
        allow(user).to receive(:twitter_uid).and_return(52043701)
        sign_in user
        get api_v1_current_user_info_url, headers: headers
      end

      it { expect(response).to have_http_status(200) }

      it 'ツイッターリストが取得できること' do
        expect(response.body).to match(/ぷらいべったー/)
      end
    end

    context 'ログインしていない場合' do
      before { get api_v1_current_user_info_url, headers: headers }

      it { expect(response).to have_http_status(:unauthorized) }
    end
  end
end
