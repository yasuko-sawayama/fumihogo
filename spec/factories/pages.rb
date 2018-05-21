# == Schema Information
#
# Table name: pages
#
#  id                :integer          not null, primary key
#  title             :string
#  position          :integer
#  content           :text
#  product_id        :integer
#  character_count   :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  impressions_count :integer          default(0), not null
#
# Indexes
#
#  index_pages_on_position    (position)
#  index_pages_on_product_id  (product_id)
#  index_pages_on_title       (title)
#
# Foreign Keys
#
#  fk_rails_...  (product_id => products.id)
#

FactoryBot.define do
  factory :page do
    product
    title 'テストタイトル'
    content { Faker::Lorem.sentence }
  end
end
