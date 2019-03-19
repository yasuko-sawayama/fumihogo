class LikesController < WithReactController
  layout 'products'
  before_action :authenticate_user!

  def index
    @products = policy_scope(current_user.get_voted(Product))
    @list_type = "favorite"
    @title = "お気に入り一覧"
    initialize_shared_store
    render formats: :html
  end
end