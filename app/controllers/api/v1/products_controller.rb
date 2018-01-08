class Api::V1::ProductsController < ApplicationController
  def index
    render nothing: true, response: 200
  end

  def show
    authorize @product = Product.find(params[:id])
  end
end
