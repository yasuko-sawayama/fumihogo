class WithReactController < ApplicationController
  include ReactOnRails::Controller


  private

  def initialize_shared_store
    redux_store("sharedStore", props: @app_props.to_s)
  end

  def set_app_data
    @app_props = {
        currentUserData: render_to_string(partial: '/api/v1/shared/current_user',
                                          formats: :json,
                                          locals: {current_user: current_user}),
        productData: render_to_string(partial: '/api/v1/shared/products',
                                      format: :json,
                                      locals: {products: @products})
    }
  end
end
