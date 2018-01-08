class ProductPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.owned(user).or(scope.restricted_login(user))
    end
  end
end
