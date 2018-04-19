Capybara.register_driver :chrome do |app|
    if ENV['SELENIUM_DRIVER_URL'].present?
      Capybara::Selenium::Driver.new(
        app,
        browser: :remote,
        url: ENV.fetch('SELENIUM_DRIVER_URL'),
        desired_capabilities: :chrome
      )
    else
      Capybara::Selenium::Driver.new(
        app, browser: :chrome,
        desired_capabilities: Selenium::WebDriver::Remote::Capabilities.chrome(
          chrome_options: {
            args: %w[headless disable-gpu window-size=1680,1050]
          }
        ))
    end
end

Capybara.javascript_driver = :chrome
