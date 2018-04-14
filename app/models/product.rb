# == Schema Information
#
# Table name: products
#
#  id            :integer          not null, primary key
#  title         :string
#  user_id       :integer
#  description   :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  privacy_level :integer          default("closed")
#
# Indexes
#
#  index_products_on_privacy_level  (privacy_level)
#  index_products_on_title          (title)
#  index_products_on_user_id        (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

class Product < ApplicationRecord
  extend Enumerize

  belongs_to :user
  has_many :pages, -> { order(position: :asc) },
           dependent: :destroy,
           inverse_of: :product

  validates :title, presence: true
  validates :pages, presence: true

  accepts_nested_attributes_for :pages

  enumerize :privacy_level,
            in: { closed: 0,
                  public_open: 1,
                  login: 2,
                  list: 3 },
            predicate: true,
            scope: true

  scope :owned, ->(user) { where(user_id: user&.id) }

  scope :restricted_login, ->(user) do
    if user
      with_privacy_level(:login)
        .or(with_privacy_level(:public_open))
    else
      with_privacy_level(:public_open)
    end
  end

  # dummy
  def charactor_count
    900
  end

  def page_count
    pages.count
  end
end
