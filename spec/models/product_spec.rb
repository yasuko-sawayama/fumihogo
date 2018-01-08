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

require 'rails_helper'

RSpec.describe Product, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
