# API 作品内容に関するコントローラ
class Api::V1::ProductsController < Api::V1::ApiController
  def index
    render nothing: true, response: 200
  end

  def show
    authorize @product = Product.find(params[:id])
  end

  def create
    @product = Product.new(product_params) do |product|
      product.user = current_user
    end

    authorize @product
    @product.save!

    render json: @product, status: :created
  end

  private

  def product_params
    params.require(:product).permit(
      :title, :description, :privacy_level,
      pages_attributes: [:id, :title, :position,
                         :content, :character_count])
  end
end
