class WithReactController < ApplicationController
  include ReactOnRails::Controller

  private

  def initialize_shared_store
    @app_props = render_to_string(template: 'api/v1/shared/shared_store.json.jbuilder')
    redux_store("sharedStore", props: @app_props)
  end
end
