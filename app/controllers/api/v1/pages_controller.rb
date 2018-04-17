# API ページ内容に関するコントローラ
class Api::V1::PagesController < Api::V1::ApiController
  before_action :set_product
  before_action :set_page

  def show; end

  def create
    authorize @page = @product.pages.new(page_params)

    if @page.save
      render json: @page, status: :created
    else
      render json: @page.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @page.assign_attributes(page_params)

    if @page.update(page_params)
      render json: @page, status: :ok
    else
      render json: @page.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def set_product
    authorize @product = Product.find(params[:product_id])
  end

  def set_page
    authorize @page = @product.pages.friendly.find(params[:id])
  end

  def page_params
    params.require(:page).except(:id, :pageId).permit(:title, :content)
  end
end
