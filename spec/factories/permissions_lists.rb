# == Schema Information
#
# Table name: permissions_lists
#
#  id              :integer          not null, primary key
#  twitter_list_id :integer
#  name            :string
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_permissions_lists_on_twitter_list_id  (twitter_list_id)
#  index_permissions_lists_on_user_id          (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

FactoryBot.define do
  factory :permissions_list do
    user
    twitter_list_id 'リスト名'
  end
end
