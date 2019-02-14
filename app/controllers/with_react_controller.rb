class WithReactController < ApplicationController
  include ReactOnRails::Controller
  before_action :set_data
  before_action :initialize_shared_store

  private

  def initialize_shared_store
    redux_store("sharedStore", props: @app_props)
  end

  def set_data
    @app_props = {
        currentUserData: render_to_string(partial: '/api/v1/shared/current_user',
                                          formats: :json,
                                          locals: {current_user: current_user})
    }
  end
end
