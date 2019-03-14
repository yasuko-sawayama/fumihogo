# API お気に入り/ブックマーク
class Api::V1::LikesController < Api::V1::ApiController
  before_action :authenticate_user!
  before_action :set_product, except: :index

  def index
    @products = policy_scope(current_user.get_voted(Product))
  end

  def create
    @product.liked_by current_user
  end

  def destroy
    @product.unliked_by current_user
  end

  private

  def set_product
    authorize @product = Product.find(params[:product_id])
  end
end