# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#  failed_attempts        :integer          default(0), not null
#  unlock_token           :string
#  locked_at              :datetime
#  nickname               :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  description            :text
#
# Indexes
#
#  index_users_on_confirmation_token    (confirmation_token) UNIQUE
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_nickname              (nickname)
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_unlock_token          (unlock_token) UNIQUE
#

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:nickname) }
  end

  describe 'factory girl test' do
    it { expect { create(:user) }.to change(User, :count).by(1) }
  end

  describe 'associations' do
    it { should have_many(:social_profiles) }
    it { should have_many(:products) }
    it { should have_many(:member_permissions).inverse_of(:member) }
    it do
      should have_many(:added_permissions_lists)
               .class_name('PermissionsList').through(:member_permissions)
    end
  end

  describe '#find_for_oauth' do
    subject(:assign_user) { User.find_for_oauth(auth) }

    context 'When Twitter:' do
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
        it '新規ユーザーが作成されること' do
          expect { assign_user }.to change(User, :count).by(1)
        end

        it '作成されたユーザーが返ること' do
          user, _policy = assign_user
          expect(user).to be_a(User)
        end

        it 'プロファイルが作成されていること' do
          user, _policy = assign_user
          expect(user.social_profiles.count).to eq(1)
        end

        it 'ポリシーが返ること' do
          _user, policy = assign_user
          expect(policy).to be_a(OAuthPolicy::Twitter)
        end

        it 'ダミーメールがセットされていること' do
          user, policy = assign_user
          expect(user.email).to eq(policy.email)
        end

        it '自己紹介が設定されていること' do
          user, policy = assign_user
          expect(user.description).to eq('mock description')
        end

        it 'ユーザーは認証ずみであること' do
          user, _policy = assign_user
          expect(user).to be_confirmed
        end
      end

      context '既にニックネームが使用されている場合' do
        before do
          create(:user, nickname: 'Mock User')
        end

        it 'ニックネームに連番を付けて作成すること' do
          user, _policy = assign_user
          expect(user.nickname).to eq('Mock User 1')
        end

        it '二人目の連番' do
          create(:user, nickname: 'Mock User 1')
          user, _policy = assign_user
          expect(user.nickname).to eq('Mock User 2')
        end

        context '5人目以上' do
          before do
            create(:user, nickname: 'Mock User 1')
            create(:user, nickname: 'Mock User 2')
            create(:user, nickname: 'Mock User 3')
            create(:user, nickname: 'Mock User 4')
            create(:user, nickname: 'Mock User 5')
          end

          it '流石に何かおかしいのでエラーにすること' do
            expect { assign_user }.to raise_error(ActiveRecord::RecordInvalid)
          end
        end
      end

      context '既存ユーザー：' do
        let!(:ext_user) { create(:user) }
        let!(:social_profile) do
          create(:social_profile,
                 user: ext_user,
                 uid: 'mock_uid_1234',
                 provider: 'twitter')
        end
        
        it 'ユーザーが作成されないこと' do
          expect { assign_user }.not_to change(User, :count)
        end

        it '既存ユーザーが返ること' do
          user, _policy = assign_user
          expect(user).to eq(ext_user)
        end

        it 'descriptionが更新されていること' do
          user, _policy = assign_user
          expect(user.description).to eq('mock description')
        end
      end
    end
  end

  describe '#destroy' do
    it 'social_profileｓが削除されること' do
      user = create(:user)
      create(:social_profile, user: user)

      expect { user.destroy }.to change(SocialProfile, :count).by(-1)
    end
  end
end
