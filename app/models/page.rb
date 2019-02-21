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

# 連載単位
class Page < ApplicationRecord
  belongs_to :product, inverse_of: :pages

  # page count
  counter_culture :product, column_name: 'character_count',
                            delta_column: 'character_count', touch: true

  # access count
  is_impressionable counter_cache: true,
                    unique: :session_hash

  acts_as_list scope: :product, top_of_list: 1
  strip_attributes only: :title, regex: /[[:blank:]]+$/

  before_save :update_character_count
  before_destroy :check_for_last_page

  validates :content, presence: true, length: { in: 10...30_000 }
  validates :title, length: { maximum: 45, allow_blank: true }

  # rubocop:disable Rails/FindBy
  def next
    product.pages.where('position > ?', position).first
  end

  def previous
    product.pages.where('position < ?', position).last
  end
  # rubocop:enable Rails/FindBy

  def formatted_title
    title.presence || "ページ#{position}"
  end

  def character_count
    count_character
  end

  # FriendlyIdが数字ではfindしてくれなくなったので暫定
  def to_param
    position.to_s
  end

  private

  # def should_generate_new_friendly_id?
  #   position_changed? || super
  # end

  def update_character_count
    self.character_count = count_character
  end

  def count_character
    # TODO: markdownの記号を除く
    content.blank? ? 0 : content.length
  end

  def check_for_last_page
    return if product.pages.count > 1 ||
              destroyed_by_association

    errors.add :base, '最後のページは削除できません。'
    throw(:abort)
  end
end
