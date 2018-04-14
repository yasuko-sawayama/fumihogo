# 作品のページ表示用
class ProductsController < ApplicationController
  include ReactOnRails::Controller

  def index
    skip_policy_scope
    @products = current_user.products.order(created_at: :desc).page(params[:page])
  end

  def show
    skip_authorization

    authorize @product = Product.find(params[:product_id] ||
                                      params[:id]) if params[:id]
  end

  def new
    authorize @product = Product.new
  end
end
