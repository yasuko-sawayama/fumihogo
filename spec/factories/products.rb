# == Schema Information
#
# Table name: products
#
#  id          :integer          not null, primary key
#  title       :string
#  user_id     :integer
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_products_on_title    (title)
#  index_products_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

FactoryBot.define do
  factory :product do
    user
    title "MyString"
    description "MyString"
    # privacy_level 1
    # character_count 1
  end
end
