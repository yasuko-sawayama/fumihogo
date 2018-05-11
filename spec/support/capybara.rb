Capybara.register_driver :chrome do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome,
                                      desired_capabilities: Selenium::WebDriver::Remote::Capabilities.chrome(
                                        chrome_options: {
                                          args: %w[headless disable-gpu window-size=1680,1050]
                                        }
                                      ))
end

Capybara.javascript_driver = :chrome

Capybara::Screenshot.register_driver(:chrome) do |driver, path|
  driver.browser.save_screenshot(path)
end
