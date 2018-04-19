# API 作品内容に関するコントローラ
class Api::V1::ProductsController < Api::V1::ApiController
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    render nothing: true, response: 200
  end

  def show; end

  def create
    @product = Product.new(product_params) do |product|
      product.user = current_user
    end

    authorize @product

    if @product.save
      render json: @product, status: :created
    else
      render json: @product.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    if @product.update(product_params)
      render :show, status: :ok
    else
      render json: @product.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def product_params
    params.require(:product).permit(
      :title, :description, :privacy_level,
      pages_attributes: [:id, :title, :position,
                         :content])
  end

  def set_product
    authorize @product = Product.find(params[:id])
  end
end
