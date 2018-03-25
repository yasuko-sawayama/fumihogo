# 作品のページ表示用
class ProductsController < ApplicationController
  include ReactOnRails::Controller

  def index
    # @products = current_user.products.order(created_at: :desc).page(params[:page])
  end

  def show
    skip_authorization

    @hello_world_props = { name: 'タイトル' }
  end
end
