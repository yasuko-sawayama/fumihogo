# 作品のページ表示用
class ProductsController < ApplicationController
  def index; end

  def show
    skip_authorization

    @hello_world_props = { name: 'タイトル' }
  end
end
