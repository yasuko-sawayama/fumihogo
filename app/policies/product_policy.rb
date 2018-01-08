class ProductPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.open
    end
  end
end
