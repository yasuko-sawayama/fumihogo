require 'rails_helper'

RSpec.describe 'Users', type: :request, vcr: true do
  let(:headers) do
    {
      'CONTENT_TYPE' => 'application/json',
      'ACCEPT' => 'application/json'
    }
  end

  describe 'GET current_user_info' do
    context 'ログインしている場合' do
      let(:list_id) { 818_095_242_884_714_497 }
      let(:user) { create(:user) }

      before do
        allow(user).to receive(:twitter_uid).and_return(52_043_701)
        set_twitter_client_mock
        sign_in user
        get api_v1_current_user_info_url, headers: headers
      end

      it { expect(response).to have_http_status(:ok) }

      it 'ツイッターリストが取得できること' do
        expect(response.body).to match(/test_name/)
      end
    end

    context 'ログインしていない場合' do
      before { get api_v1_current_user_info_url, headers: headers }

      it { expect(response).to have_http_status(:unauthorized) }
    end
  end
end
