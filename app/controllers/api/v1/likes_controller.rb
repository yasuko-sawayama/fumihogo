# API お気に入り/ブックマーク
class Api::V1::LikesController < Api::V1::ApiController
  before_action :authenticate_user!
  skip_after_action :verify_policy_scoped

  def index
    @products = policy_scope(current_user.get_voted(Product))
  end
end