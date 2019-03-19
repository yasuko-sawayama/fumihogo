# 作品のページ表示用
class ProductsController < WithReactController
  before_action :store_location_for_user!
  before_action :authenticate_user!, except: [:show, :not_authorized]
  before_action :set_and_authorize_product, only: [:show, :destroy]
  skip_after_action :verify_policy_scoped, :only => :index

  def index
    @products = current_user.products.page(params[:page])
    @products = Product.all
    @user = current_user
    initialize_shared_store
    render formats: :html
  end

  def show
    @user = @product.user.decorate
    @list_type = 'content'
    initialize_shared_store

    render formats: :html
  end

  def new
    authorize @product = Product.new
    @title = '新しく小説を書く'
    @list_type = 'create'
    initialize_shared_store
    render formats: :html
  end

  def destroy
    @product.destroy
    redirect_to products_url, notice: '作品を削除しました。'
  end

  # 認証できなかった時のエラー表示ページ
  def not_authorized
    skip_authorization
    set_product
    redirect_to @product if Pundit.policy(current_user, @product).show?
  end

  private

  def set_and_authorize_product
    authorize set_product if params[:id]
  end

  def set_product
    @product = Product.find(params[:product_id] ||
                            params[:id])
  end
end
