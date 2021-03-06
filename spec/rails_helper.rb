require 'spec_helper'
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)

# Prevent database truncation if the environment is production
abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'rspec/rails'

require 'devise'
require 'capybara/rails'
require 'capybara/rspec'
require 'capybara-screenshot/rspec'
require 'capybara/email/rspec'
require 'selenium-webdriver'
require 'site_prism'
require 'shoulda/matchers'
require 'support/factory_bot'
require "pundit/rspec"

require 'webmock/rspec'
require 'vcr'

require 'simplecov'
SimpleCov.start 'rails'
SimpleCov.minimum_coverage 55

Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }

ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  # Ensure that if we are running js tests, we are using latest webpack assets
  # This will use the defaults of :js and :server_rendering meta tags
  ReactOnRails::TestHelper.configure_rspec_to_compile_assets(config)

  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  config.infer_spec_type_from_file_location!
  config.treat_symbols_as_metadata_keys_with_true_values = true

  config.example_status_persistence_file_path = "examples.txt"

  config.extend DeviseControllerMacros, type: :controller
  config.include RequestHelper, type: :request
  config.include LoginHelper, type: :feature
  config.include FeaturesHelper, type: :feature
  config.include TwitterClientHelper
  
  config.order = "random"
  # Include path helpers
  config.include Rails.application.routes.url_helpers
  config.include Capybara::DSL

  # Filter lines from Rails gems in backtraces.
  config.filter_rails_from_backtrace!
end
