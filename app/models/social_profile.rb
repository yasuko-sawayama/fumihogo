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
#  description   :text
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

# OAuth認証情報保管
class SocialProfile < ApplicationRecord
  belongs_to :user

  validates :uid, uniqueness: { scope: :provider }
  validates :provider, uniqueness: { scope: :user_id }

  def self.find_or_initialize_from_auth(auth)
    profile = find_or_initialize_by(uid: auth.uid, provider: auth.provider)
    policy = profile.provider_policy(auth)

    update_propaties(profile, policy)
    profile
  end

  def self.update_propaties(profile, policy)
    profile.account_name = policy.name
    profile.url = policy.url
    profile.profile_image = policy.image_url
    profile.description = policy.description
    update_list(profile, policy) if policy.instance_of?(OAuthPolicy::Twitter)
  end

  def provider_policy(auth)
    class_name = provider.to_s.classify
    "OAuthPolicy::#{class_name}".constantize.new(auth)
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
