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
#  slug            :string
#
# Indexes
#
#  index_pages_on_position    (position)
#  index_pages_on_product_id  (product_id)
#  index_pages_on_slug        (slug) UNIQUE
#  index_pages_on_title       (title)
#
# Foreign Keys
#
#  fk_rails_...  (product_id => products.id)
#

class Page < ApplicationRecord
  extend FriendlyId

  # page count
  counter_culture :product, column_name: 'character_count',
  delta_column: 'character_count', touch: true

  belongs_to :product, inverse_of: :pages

  acts_as_list scope: :product, top_of_list: 1
  strip_attributes only: :title, regex: /[[:blank:]]+$/

  # products/:product_id/page/:positionでアクセスする
  friendly_id :position, use: [:scoped, :finders],
              scope: :product,
              slug_column: :position

  before_save :update_character_count
  before_destroy :check_for_last_page

  validates :content, presence: true, length: { in: 10...30_000 }
  validates :title, length: { maximum: 45, allow_blank: true }

  def next
    product.pages.where('position > ?', position).first
  end

  def previous
    product.pages.where('position < ?', position).last
  end

  def formatted_title
    title.blank? ? "ページ#{position}" : title
  end

  private

  def should_generate_new_friendly_id?
    position_changed? || super
  end

  def update_character_count
    self.character_count = count_character
  end

  def count_character
    #TODO: markdownの記号を除く
    content.blank? ? 0 : content.length
  end

  def check_for_last_page
    return if product.pages.count > 1

    errors.add :base, '最後のページは削除できません。'
    throw(:abort)
  end
end

