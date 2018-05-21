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
    # let(:restricted) { build(:product, user: creator, restricted: true, privacy_level: :open) }

    it "\xE4\xBD\x9C\xE6\x88\x90\xE8\x80\x85\xE3\x81\xAF\xE8\x87\xAA\xE5\x88\x86\xE3\x81\xAE\xE4\xBD\x9C\xE5\x93\x81\xE3\x81\x8C\xE9\x96\xB2\xE8\xA6\xA7\xE3\x81\xA7\xE3\x81\x8D\xE3\x82\x8B\xE3\x81\x93\xE3\x81\xA8" do
      expect(subject).to permit(creator, closed)
      expect(subject).to permit(creator, open)
      expect(subject).to permit(creator, login)

      # expect(subject).to permit(creator, restricted)
    end

    it "\xE5\x85\xA8\xE4\xBD\x93\xE5\x85\xAC\xE9\x96\x8B\xE4\xBD\x9C\xE5\x93\x81\xE3\x81\xAF\xE3\x83\xAD\xE3\x82\xB0\xE3\x82\xA4\xE3\x83\xB3\xE3\x81\x97\xE3\x81\xA6\xE3\x81\x84\xE3\x81\xAA\xE3\x81\x8F\xE3\x81\xA6\xE3\x82\x82\xE9\x96\xB2\xE8\xA6\xA7\xE3\x81\xA7\xE3\x81\x8D\xE3\x82\x8B\xE3\x81\x93\xE3\x81\xA8" do
      expect(subject).to permit(User.new, open)
      expect(subject).to permit(other, open)
    end

    it "\xE3\x83\xAD\xE3\x82\xB0\xE3\x82\xA4\xE3\x83\xB3\xE5\x85\xAC\xE9\x96\x8B\xE4\xBD\x9C\xE5\x93\x81\xE3\x81\xAF\xE3\x83\xAD\xE3\x82\xB0\xE3\x82\xA4\xE3\x83\xB3\xE3\x81\x97\xE3\x81\x9F\xE3\x83\xA6\xE3\x83\xBC\xE3\x82\xB6\xE3\x83\xBC\xE3\x81\xAE\xE3\x81\xBF\xE9\x96\xB2\xE8\xA6\xA7\xE3\x81\xA7\xE3\x81\x8D\xE3\x82\x8B\xE3\x81\x93\xE3\x81\xA8" do
      expect(subject).not_to permit(guest, login)
      expect(subject).to permit(other, login)
    end

    # it "18才以上のみ閲覧可の作品はログインしたユーザーのみ閲覧できること" do
    #   expect(subject).not_to permit(guest, restricted)
    #   expect(subject).to permit(user, restricted)
    # end

    describe "\xE3\x83\xAA\xE3\x82\xB9\xE3\x83\x88\xE9\x99\x90\xE5\xAE\x9A" do
      let(:my_list) { create(:permissions_list, user: creator, twitter_list_id: 853_249_524_558_581_761) }
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

      it "\xE4\xBD\x9C\xE8\x80\x85\xE6\x9C\xAC\xE4\xBA\xBA\xE3\x81\xAF\xE9\x96\xB2\xE8\xA6\xA7\xE3\x81\xA7\xE3\x81\x8D\xE3\x82\x8B\xE3\x81\x93\xE3\x81\xA8" do
        expect(subject).to permit(creator, list)
      end

      it "\xE3\x83\xAA\xE3\x82\xB9\xE3\x83\x88\xE3\x81\xAB\xE5\x90\xAB\xE3\x81\xBE\xE3\x82\x8C\xE3\x81\xA6\xE3\x81\x84\xE3\x82\x8B\xE3\x83\xA6\xE3\x83\xBC\xE3\x82\xB6\xE3\x83\xBC\xE3\x81\xAE\xE3\x81\xBF\xE9\x96\xB2\xE8\xA6\xA7\xE3\x81\xA7\xE3\x81\x8D\xE3\x82\x8B\xE3\x81\x93\xE3\x81\xA8" do
        expect(subject).to permit(member, list)
        expect(subject).not_to permit(other, list)
      end

      # TODO: そのうちユーザー追加・オリジナルリストで対応する
      it 'Twitter登録でないユーザーは閲覧できないこと' do
        expect(subject).not_to permit(not_twitter, list)
      end

      it "\xE3\x83\xAD\xE3\x82\xB0\xE3\x82\xA4\xE3\x83\xB3\xE3\x81\x97\xE3\x81\xA6\xE3\x81\x84\xE3\x81\xAA\xE3\x81\x84\xE3\x83\xA6\xE3\x83\xBC\xE3\x82\xB6\xE3\x83\xBC\xE3\x81\xAF\xE9\x96\xB2\xE8\xA6\xA7\xE3\x81\xA7\xE3\x81\x8D\xE3\x81\xAA\xE3\x81\x84\xE3\x81\x93\xE3\x81\xA8" do
        expect(subject).not_to permit(guest, list)
      end
    end
    let(:member) { create(:user) }

    it "\xE9\x9D\x9E\xE5\x85\xAC\xE9\x96\x8B\xE4\xBD\x9C\xE5\x93\x81\xE3\x81\xAF\xE4\xBD\x9C\xE8\x80\x85\xE4\xBB\xA5\xE5\xA4\x96\xE9\x96\xB2\xE8\xA6\xA7\xE3\x81\xA7\xE3\x81\x8D\xE3\x81\xAA\xE3\x81\x84\xE3\x81\x93\xE3\x81\xA8" do
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
