# 作品のページ表示用
class ProductsController < ApplicationController
  include ReactOnRails::Controller

  before_action :store_location_for_user!
  before_action :authenticate_user!, except: [:show]
  before_action :set_product, only: [:show, :destroy]

  def index
    @products = policy_scope(current_user.products).page(params[:page])
  end

  def show; end

  def new
    authorize @product = Product.new
  end

  def destroy
    @product.destroy
    redirect_to products_url, notice: '作品を削除しました。'
  end

  private

  def set_product
    authorize @product = Product.find(params[:product_id] ||
                                      params[:id]) if params[:id]
  end
end
