# API ページ内容に関するコントローラ
class Api::V1::PagesController < Api::V1::ApiController
  before_action :set_product

  def show
    authorize @page = @product.pages.friendly.find(params[:id])
  end

  private

  def set_product
    authorize @product = Product.find(params[:product_id])
  end
end
