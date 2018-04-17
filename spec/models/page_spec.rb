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

  describe 'previous next' do
    let(:product) { create(:product) }

    before do
      create_list(:page, 12, product: product)
    end 
    
    it { expect(product.pages.find_by(position: 3).previous.position).to eq(2) }
    it { expect(product.pages.find_by(position: 5).next.position).to eq(6) }
  end

  describe 'frendry_id' do
    let!(:product) { create(:product) }
    let!(:page) { build(:page, product: product) }

    it 'positionをIDの代わりに使用できること' do
      create_list(:page, 10, product: product)
      page.save!
      page.insert_at(3)
      page.save!
      # friendly.findを使うとIDまたはpositionで検索されるため、
      # find_by_friendly_idを使用してpositionのみを検索対象とする
      # optionに:findersを指定すること
      expect(product.pages.find_by_friendly_id(3)).to eq(page)
    end
  end

  describe "文字数をキャッシュする" do
    let(:page) { create(:page, content: Faker::Lorem.characters(10)) }

    it '文字数が記録されること' do
      expect(page.reload.character_count).to eq(10)
    end
    it '更新時に変更されること' do
      page.update(content: Faker::Lorem.characters(20))
      expect(page.reload.character_count).to eq(20)
    end
  end
  
  describe "productのcharacter countをアップデートする" do
    let!(:product) { create(:product) }
    let(:page)  { build(:page, product: product) }

    it "ページを追加するとカウントアップすること" do
      page.content = Faker::Lorem.characters(30)
      expect { page.save! }.to change { product.reload.character_count }.by(30)
    end

    context "既にページがある場合" do
      it "合計数が記録されること" do
        product.pages.destroy_all
        product.pages.create(content: Faker::Lorem.characters(40))
        product.pages.create(content: Faker::Lorem.characters(20))
        expect(product.reload.character_count).to eq(60)
      end
    end

    it "ページ数を変更するとカウントアップすること" do
      product.pages.destroy_all
      page = product.pages.create(content: Faker::Lorem.characters(40))
      page.update(content: Faker::Lorem.characters(23))

      expect(product.reload.character_count).to eq(23)
    end
  end
end
