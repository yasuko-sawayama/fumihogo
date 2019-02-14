class WithReactController < ApplicationController
  include ReactOnRails::Controller

  before_action :set_data
  before_action :initialize_shared_store

  private

  def initialize_shared_store
    redux_store("sharedStore", props: @app_props)
  end
end
