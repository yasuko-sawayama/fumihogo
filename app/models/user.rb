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

# 一般ユーザー
# 投稿・閲覧可
# Twitterのみ初期実装
# TODO: Facebook, Google（必要か…？）
class User < ApplicationRecord
  extend FriendlyId

  has_many :social_profiles, dependent: :destroy
  has_many :products, -> { order(created_at: :desc) },  dependent: :destroy
  # 閲覧許可リスト
  has_many :permissions_lists, dependent: :destroy
  has_many :member_permissions,
           dependent: :nullify,
           inverse_of: :member,
           foreign_key: 'user_id'
  has_many :added_permissions_lists,
           dependent: :nullify,
           through: :member_permissions,
           class_name: 'PermissionsList',
           source: :permissions_list

  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable,
         :lockable, :omniauthable

  friendly_id :nickname

  validates :nickname, presence: true, uniqueness: true

  def profile_image
    return social_profiles.first.profile_image if social_profiles.exists?
    nil
  end

  # 編集実装するまで一旦social_profileに委譲
  def description
    social_profiles.first&.description
  end

  def self.find_for_oauth(auth)
    profile = SocialProfile.find_or_initialize_from_auth(auth)
    policy = profile.provider_policy(auth)

    OAuthUserCreator.new(profile, policy)
      .create_new_user_from_profile if profile.user.nil?

    profile.save!
    update_list(profile, policy) if policy.instance_of?(OAuthPolicy::Twitter)

    [profile.user, policy]
  end
  
  def twitter?
    social_profiles.exists?(provider: 'twitter')
  end

  def twitter_uid
    social_profiles.find_by(provider: 'twitter')&.uid
  end

  def sns_url
    social_profiles.order(provider: :desc).first.url || "#"
  end

  def self.update_list(profile, policy)
    factory = PermissionListFactory.new(profile.user,
                                        access_token: policy.credentials['token'],
                                        access_secret: policy.credentials['secret'])
    Timeout::timeout(120) do
      factory.fetch_lists_from_twitter
    end
  end
end
