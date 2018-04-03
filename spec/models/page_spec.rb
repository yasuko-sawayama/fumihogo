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

require 'rails_helper'

RSpec.describe Page, type: :model do
  describe 'association' do
    it { should belong_to(:product) }
  end

  describe 'validation' do
    it { should validate_presence_of(:content) }
    it { should validate_length_of(:content).is_at_least(10) }
  end

  it { expect { create(:page) }.not_to raise_error }
end
