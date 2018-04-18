class PagePolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope
    end
  end

  def show?
    true
  end

  def create?
    record.product.user == user
  end

  def update?
    create?
  end

  def destroy?
    create?
  end
end
