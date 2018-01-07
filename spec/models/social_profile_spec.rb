# == Schema Information
#
# Table name: social_profiles
#
#  id            :integer          not null, primary key
#  user_id       :integer
#  uid           :string
#  provider      :string
#  account_name  :string
#  profile_image :string
#  url           :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_social_profiles_on_account_name  (account_name)
#  index_social_profiles_on_provider      (provider)
#  index_social_profiles_on_uid           (uid)
#  index_social_profiles_on_user_id       (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

require 'rails_helper'

RSpec.describe SocialProfile, type: :model do
  describe 'validations' do
    it { should belong_to(:user) }
    it { should validate_uniqueness_of(:uid).scoped_to(:provider) }
    it { should validate_uniqueness_of(:provider).scoped_to(:user_id) }
  end

  describe '#find_or_initialize_from_auth' do
    subject(:social_profile) { SocialProfile.find_or_initialize_from_auth(auth) }

    context 'When twitter' do
      let(:auth) do
        OmniAuth::AuthHash.new(
          'provider' => 'twitter',
          'uid'  => 'mock_uid_1234',
          'info' => {
            'name' => 'Mock User',
            'nickname' => 'Mock User',
            'image' => 'http://mock_image_url.com',
            'description' => 'mock description',
            'urls' => {
              'twitter' => 'http://twitter.com/mock'
            }
          },
          'credentials' => {
            'token'  => 'mock_credentials_token',
            'secret' => 'mock_credentials_secret'
          },
          'extra' => {
            'raw_info' => {
              'name' => 'Mock User',
              'id'   => 'mock_uid_1234'
            }
          }
        )
      end

      context '新規ユーザー：' do
        it '新規プロファイルがbuildされること' do
          expect(social_profile).to be_a_new(SocialProfile)
        end

        it { expect(social_profile.uid).to eq('mock_uid_1234') }
        it { expect(social_profile.provider).to eq('twitter') }
      end

      context 'ログインしたことのあるユーザー：' do
        let(:user) { create(:user) }

        let!(:profile) do
          tmp = SocialProfile.find_or_initialize_from_auth(auth)
          tmp.user = user
          tmp.save!
          tmp
        end

        it '既存ユーザーのプロファイルが検索できること' do
          expect(social_profile).to eq(profile)
        end
      end
    end

    context 'when invalid provider' do
      let(:auth) do
        OmniAuth::AuthHash.new(
          provider: 'google_oauth2',
          uid: SecureRandom.uuid,
          info: {
            email: 'admin@example.com'
          }
        )
      end

      it 'エラーになること' do
        expect do
          SocialProfile.find_or_create_from_auth(auth)
        end.to raise_error(NameError)
      end
    end
  end
end
