# アカウント関連（Devise系はdevise/以下）
class UsersController < WithReactController
  layout 'products'

  def show
    authorize @user = User.friendly.find(params[:id])
    @products = policy_scope(@user.products)
                .order(created_at: :desc)
                .page(params[:page]).per(20)
    render content_type: 'text/html'
  end

  def edit
    authorize @user = current_user
  end

  private

  def set_data
    @app_props = {
        productData: render_to_string(template: '/api/v1/products/index',
                                      handler: :jbuilder,
                                      locals: {products: @products})
    }
  end
end
