require 'rails_helper'

RSpec.describe ProductListCreator do
  describe '作者のリストの場合' do
    subject(:create_list) { creator.sync_twitter_list(list_id) }

    let(:creator) { described_class.new(product) }
    let(:list_id) { 818_095_242_884_714_497 }
    let(:user) { create(:user) }
    let(:product) { build(:product, user: user, privacy_level: :list) }

    before { allow(user).to receive(:twitter_uid).and_return(52_043_701) }

    it '作成できること' do
      expect { create_list }.to change(PermissionsList, :count).by(1)
    end

    it '検索できること' do
      my_list = create(:permissions_list, user: user, twitter_list_id: list_id)
      create_list
      expect(product.reload.permissions_list).to eq(my_list)
    end

    it 'productから参照できること' do
      create_list
      expect(product.reload.permissions_list.twitter_list_id).to eq(list_id)
    end
  end

  describe '作者のリストではない場合' do
    it 'リストがない場合はfalseが返ること'
    it 'falseが返ること'
  end
end
