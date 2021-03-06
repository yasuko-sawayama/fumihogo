require 'rails_helper'

RSpec.describe ProductPolicy, vcr: true do
  subject { described_class }

  permissions '.scope' do
    let(:resolved_scope) do
      described_class::Scope.new(user, Product.all).resolve
    end

    let!(:closed) { create(:product, privacy_level: :closed) }
    let!(:login) { create(:product, privacy_level: :login) }
    let!(:open) { create(:product, privacy_level: :public_open) }

    context '作者：' do
      let(:user) { create(:user) }

      let!(:my_closed) do
        create(:product,
               user: user,
               privacy_level: :closed)
      end
      let!(:my_login) do
        create(:product,
               user: user,
               privacy_level: :login)
      end

      let!(:my_open) do
        create(:product,
               user: user,
               privacy_level: :public_open)
      end

      it '非公開作品を含む' do
        expect(resolved_scope).to include(my_closed)
      end

      it 'ログイン限定作品を含む' do
        expect(resolved_scope).to include(my_login)
      end

      it '公開作品を含む' do
        expect(resolved_scope).to include(my_open)
      end
    end

    context 'ゲスト' do
      let(:user) { nil }

      it '非公開作品を含まない' do
        expect(resolved_scope).not_to include(closed)
      end

      it 'ログイン限定作品を含まない' do
        expect(resolved_scope).not_to include(login)
      end

      it '公開作品を含む' do
        expect(resolved_scope).to include(open)
      end
    end

    context 'ログインユーザー' do
      let(:user) { build(:user) }

      it '非公開作品を含まない' do
        expect(resolved_scope).not_to include(closed)
      end

      it 'ログイン限定作品を含む' do
        expect(resolved_scope).to include(login)
      end

      it '公開作品を含む' do
        expect(resolved_scope).to include(open)
      end
    end
  end

  permissions :show? do
    let(:creator) { create(:user) }
    let(:other) { create(:user) }
    let(:guest) { build(:user) }

    let(:closed) { create(:product, user: creator, privacy_level: :closed) }
    let(:open) { create(:product, user: creator, privacy_level: :public_open) }
    let(:login) { create(:product, user: creator, privacy_level: :login) }
    # let(:restricted) do
    # build(:product, user: creator, restricted: true, privacy_level: :open)
    # end

    it '作成者は自分の作品が閲覧できること' do
      expect(subject).to permit(creator, closed)
      expect(subject).to permit(creator, open)
      expect(subject).to permit(creator, login)

      # expect(subject).to permit(creator, restricted)
    end

    it '全体公開作品はログインしていなくても閲覧できること' do
      expect(subject).to permit(User.new, open)
      expect(subject).to permit(other, open)
    end

    it 'ログイン公開作品はログインしたユーザーのみ閲覧できること' do
      expect(subject).not_to permit(guest, login)
      expect(subject).to permit(other, login)
    end

    # it "18才以上のみ閲覧可の作品はログインしたユーザーのみ閲覧できること" do
    #   expect(subject).not_to permit(guest, restricted)
    #   expect(subject).to permit(user, restricted)
    # end

    describe 'リスト限定' do
      let(:my_list) do
        create(:permissions_list,
               user: creator,
               twitter_list_id: 853_249_524_558_581_761)
      end
      let(:list) do
        create(:product, user: creator,
                         privacy_level: :list, permissions_list: my_list)
      end
      let(:member) { create(:user) }
      let(:not_twitter) { create(:user) }

      before do
        # リスト追加済みユーザーのUIDを返す
        allow(member).to receive(:twitter_uid).and_return('83561601')
        allow(member).to receive(:twitter?).and_return(true)

        allow(not_twitter).to receive(:twitter?).and_return(false)
      end

      it '作者本人は閲覧できること' do
        expect(subject).to permit(creator, list)
      end

      it 'リストに含まれているユーザーのみ閲覧できること' do
        expect(subject).to permit(member, list)
        expect(subject).not_to permit(other, list)
      end

      # TODO: そのうちユーザー追加・オリジナルリストで対応する
      it 'Twitter登録でないユーザーは閲覧できないこと' do
        expect(subject).not_to permit(not_twitter, list)
      end

      it 'ログインしていないユーザーは閲覧できないこと' do
        expect(subject).not_to permit(guest, list)
      end
    end
    let(:member) { create(:user) }

    it '非公開作品は作者以外閲覧できないこと' do
      expect(subject).not_to permit(guest, closed)
      expect(subject).not_to permit(member, closed)
    end

    # TODO
    # it 'ユーザー限定公開作品は設定されたユーザーのみ閲覧できること'
  end

  permissions :create? do
    it 'ログインしていれば作成できる' do
      user = create(:user)
      expect(subject).to permit(user, Product.new)
    end

    it 'ゲストは作成できない' do
      expect(subject).not_to permit(User.new, Product.new)
    end
  end

  permissions :update? do
    describe 'ログインしている' do
      let(:user) { create(:user) }

      it '自分の作品は変更できる' do
        my_product = build(:product, user: user)
        expect(subject).to permit(user, my_product)
      end

      it '他人の作品は変更できない' do
        other_product = build(:product)
        expect(subject).not_to permit(user, other_product)
      end
    end

    it 'ゲストは変更できない' do
      user = User.new
      product = build(:product)
      expect(subject).not_to permit(user, product)
    end
  end

  permissions :destroy? do
    pending "add some examples to (or delete) #{__FILE__}"
  end
end
