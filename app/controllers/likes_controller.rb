class LikesController < WithReactController
  layout 'products'
  before_action :authenticate_user!

  def index
    @products = policy_scope(current_user.get_voted(Product))
    initialize_shared_store
    render formats: :html
  end
end