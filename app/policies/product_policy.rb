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
    user == record.user
  end
end
