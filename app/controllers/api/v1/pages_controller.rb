# API ページ内容に関するコントローラ
class Api::V1::PagesController < Api::V1::ApiController
  before_action :set_product

  def show
    authorize @page = @product.pages.friendly.find(params[:id])
  end

  def create
    authorize @page = @product.pages.new(page_params)

    if @page.save
      render json: @page, status: :created
    else
      render json: @page.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def set_product
    authorize @product = Product.find(params[:product_id])
  end

  def page_params
    params.require(:page).permit(:title, :content)
  end
end
