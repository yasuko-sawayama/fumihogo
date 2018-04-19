# トップページ
class HomeController < ApplicationController
  include DeviseHelper
  def index
    skip_policy_scope

  end
end
