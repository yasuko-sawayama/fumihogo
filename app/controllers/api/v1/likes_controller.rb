# API お気に入り/ブックマーク
class Api::V1::LikesController < Api::V1::ApiController
  before_action :authenticate_user!

  def index
    @products = policy_scope(current_user.get_voted(Product))
  end
end