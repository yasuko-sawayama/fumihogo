class ProductPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.owned(user).or(scope.restricted_login(user))
    end
  end

  def create?
    user&.persisted?
  end

  def update?
    user == record&.user
  end

  def destroy?
    user == record&.user
  end

  # リスト許可があるのでScopeとは別途定義
  def show?
    # 作成者本人は許可
    return true if self_product?

    # 18禁はログインユーザーのみ
    # return false if record.restricted? && !user&.persisted?

    return false if record.privacy_level.closed?
    return true if record.privacy_level.public_open?
    return user&.persisted? if record.privacy_level.login?
    return record.permissions_list.allow?(user) if record.privacy_level.list?

    false
  end

  private

  def self_product?
    user && user.id == record&.user&.id
  end
end
