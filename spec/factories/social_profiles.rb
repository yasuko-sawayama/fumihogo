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
#  index_social_profiles_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

FactoryBot.define do
  factory :social_profile do
    user nil
    uid 'xxxxxxxxxx'
    provider :twitter
    account_name 'test'
    profile_image 'test'
    url 'http://test.com'
  end
end
