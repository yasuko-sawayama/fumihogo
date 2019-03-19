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

require 'rails_helper'

RSpec.describe Product, type: :model do
  describe 'association' do
    it { should belong_to(:user) }
    it { should have_many(:pages) }
    it { should belong_to(:permissions_list).required(false) }
  end

  describe 'validation' do
    it { should validate_presence_of(:pages) }
  end

  it { expect { create(:product) }.to change(Product, :count).by(1) }

  it { should accept_nested_attributes_for(:pages) }

  describe 'scope' do
    it 'openスコープが取得できること' do
      product = create(:product, privacy_level: :public_open)
      expect(Product.with_privacy_level(:public_open)).to include(product)
    end
  end

  describe '#destroy' do
    subject(:destroy) { product.destroy! }

    let!(:product) { create(:product) }

    it { expect { destroy }.not_to raise_error }
    it { expect { destroy }.to change(Product, :count).by(-1) }
  end

  describe "お気に入り" do
    let(:product) {create(:product)}
    let(:user) {create(:user)}

    it 'お気に入りに入れられること' do
      expect {product.liked_by user}.to change {product.reload.votes_for.size}.by(1)
    end
  end
end
