require 'rails_helper'

RSpec.describe ProductPolicy do

  subject { described_class }

  permissions ".scope" do

    let(:resolved_scope) do
      described_class::Scope.new(user, Product.all).resolve
    end

    let!(:closed) { create(:product, privacy_level: :closed) }
    let!(:login) { create(:product, privacy_level: :login) }
    let!(:open) { create(:product, privacy_level: :open) }

    context '作者：' do
      let(:user) { create(:user) }

      let!(:my_closed) { create(:product,
                                user: user,
                                privacy_level: :closed)
      }
      let!(:my_login) { create(:product,
                               user: user,
                               privacy_level: :login) }

      let!(:my_open) { create(:product,
                              user: user,
                              privacy_level: :open) }

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

  # Scope準拠のため省略
  # permissions :show? do
  #   pending "add some examples to (or delete) #{__FILE__}"
  # end

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
    pending "add some examples to (or delete) #{__FILE__}"
  end

  permissions :destroy? do
    pending "add some examples to (or delete) #{__FILE__}"
  end
end
