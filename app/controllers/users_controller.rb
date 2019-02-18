# アカウント関連（Devise系はdevise/以下）
class UsersController < WithReactController
  layout 'products'

  def show
    authorize @user = User.friendly.find(params[:id])
    @products = policy_scope(@user.products)
                    .order(created_at: :desc)
                    .page(params[:page]).per(20)

    initialize_shared_store

    render formats: :html

  end

  def edit
    authorize @user = current_user
  end
end
