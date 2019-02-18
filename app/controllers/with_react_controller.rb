class WithReactController < ApplicationController
  include ReactOnRails::Controller


  private

  def initialize_shared_store
    redux_store("sharedStore", props: @app_props)
  end

  def set_app_data
    @app_props = {
        currentUserData: render_to_string(partial: '/api/v1/shared/current_user',
                                          formats: :json,
                                          locals: {current_user: current_user}),
        productData: @products
    }
  end
end
