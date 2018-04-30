# == Schema Information
#
# Table name: permissions_lists
#
#  id              :integer          not null, primary key
#  twitter_list_id :integer
#  name            :string
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_permissions_lists_on_twitter_list_id  (twitter_list_id)
#  index_permissions_lists_on_user_id          (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#

require 'rails_helper'

RSpec.describe PermissionsList, type: :model, vcr: true do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:member_permissions) }
    it { should have_many(:members).class_name('User').through(:member_permissions) }
  end

  describe '#ユーザー追加' do
    subject(:add_list) { list.members << tanaka }

    let(:tanaka) { create(:user, nickname: :tanaka) }
    let(:suzuki) { create(:user, nickname: :suzuki) }
    let(:list) { create(:permissions_list) }

    it 'ユーザーを追加できること' do
      add_list
      expect(list.reload.members).to include(tanaka)
    end

    it '同じユーザーを二回追加できないこと' do
      add_list
      expect { add_list }.not_to change { list.reload.members.count }
      expect(list.reload.members.count).to eq(1)
    end
  end

  describe '#allow?' do
    subject(:allow?) { list.allow?(user) }

    let(:user) { build(:user) }

    describe 'twitter_uidがある場合' do
      before { allow(user).to receive(:twitter_uid).and_return('83561601') }
      before { allow(user).to receive(:twitter?).and_return(true) }

      describe 'リストに含まれる場合' do
        let(:list) { create(:permissions_list, twitter_list_id: 853249524558581761) }

        it { is_expected.to be_truthy }
      end

      describe 'ユーザーの別のリストに含まれる場合' do
        let(:list) { create(:permissions_list, twitter_list_id: 818095242884714497) }

        it { is_expected.to be_falsy }
      end
    end

    describe 'twitterユーザーではない場合' do
      let(:list) { create(:permissions_list, twitter_list_id: 853249524558581761) }
      before { allow(user).to receive(:twitter?).and_return(false) }

      it { is_expected.to be_falsy }
    end
  end
end
