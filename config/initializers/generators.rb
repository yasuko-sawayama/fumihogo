Rails.application.config.generators do |g|
  g.template_engine :haml
  g.test_framework :rspec,
                   fixtures: true,
                   view_specs: false,
                   helper_specs: false,
                   routing_specs: false,
                   controller_specs: false,
                   request_specs: true
  g.helper false
  g.assets false
end
