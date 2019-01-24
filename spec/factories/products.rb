# == Schema Information
#
# Table name: products
#
#  id                  :integer          not null, primary key
#  title               :string
#  user_id             :integer
#  description         :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  privacy_level       :integer          default("public_open")
#  character_count     :integer          default(0), not null
#  impressions_count   :integer
#  permissions_list_id :integer
#  restricted          :boolean          default(FALSE)
#
# Indexes
#
#  index_products_on_permissions_list_id  (permissions_list_id)
#  index_products_on_privacy_level        (privacy_level)
#  index_products_on_title                (title)
#  index_products_on_user_id              (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (permissions_list_id => permissions_lists.id)
#  fk_rails_...  (user_id => users.id)
#

FactoryBot.define do
  factory :product do
    user
    title { 'MyString' }
    description { 'MyString' }
    privacy_level { :public_open }
    # character_count 1

    after(:build) do |product|
      product.pages << build(:page, product: product)
    end
  end
end
