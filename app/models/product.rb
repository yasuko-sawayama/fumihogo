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
#  privacy_level :integer          default(0)
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
  belongs_to :user
  has_many :pages

  validates :title, presence: true
  validates :pages, presence: true

  enum privacy_level: %w(closed open login list)

  scope :owned, ->(user) { where(user_id: user&.id) }
  scope :restricted_login, ->(user) { user ? login.or(open) : open }
end
