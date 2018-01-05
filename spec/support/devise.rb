OmniAuth.config.test_mode = true

RSpec.configure do |config|
  config.include Warden::Test::Helpers
  config.include Devise::Test::ControllerHelpers, type: :controller
  
  config.after do
    Warden.test_reset!
  end
end
