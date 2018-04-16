# == Schema Information
#
# Table name: pages
#
#  id              :integer          not null, primary key
#  title           :string
#  position        :integer
#  content         :text
#  product_id      :integer
#  character_count :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
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

class Page < ApplicationRecord
  extend FriendlyId

  belongs_to :product, inverse_of: :pages

  acts_as_list scope: :product, top_of_list: 1
  friendly_id :position, use: [:scoped, :finders],
              scope: :product,
              slug_column: :position

  validates :content, presence: true, length: { in: 10...30_000 }
  validates :title, length: { maximum: 45, allow_blank: true }

  def next
    product.pages.where('position > ?', position).first
  end

  def previous
    product.pages.where('position < ?', position).last
  end

  private

  def should_generate_new_friendly_id?
    position_changed? || super
  end
end

