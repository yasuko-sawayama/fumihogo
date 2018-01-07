# == Schema Information
#
# Table name: products
#
#  id              :integer          not null, primary key
#  user_id         :integer
#  title           :string
#  description     :string
#  privacy_level   :integer
#  character_count :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_products_on_privacy_level  (privacy_level)
#  index_products_on_user_id        (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

FactoryBot.define do
  factory :product do
    user nil
    title "MyString"
    description "MyString"
    privacy_level 1
    character_count 1
  end
end
