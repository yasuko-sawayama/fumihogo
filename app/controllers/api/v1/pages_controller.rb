class Api::V1::PagesController < Api::V1::ApiController
  before_action :set_product

  def show
    authorize @page = @product.pages.find(params[:id])
    p @page
  end

  private

  def set_product
    authorize @product = Product.find(params[:product_id])
  end
end
