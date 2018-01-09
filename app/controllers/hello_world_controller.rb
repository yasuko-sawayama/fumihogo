# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout 'hello_world'

  def index
    skip_policy_scope
    @hello_world_props = { name: 'Stranger' }
  end
end
