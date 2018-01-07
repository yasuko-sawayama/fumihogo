class Api::V1::ProductsController < ActionController::Base
  def index
    render nothing: true, response: 200
  end

  def show
    @product = Product.find(params[:id])
  end
end
