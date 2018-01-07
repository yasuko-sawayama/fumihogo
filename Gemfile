source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'nokogiri'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'haml-rails'
gem 'bootstrap-sass', '~> 3.3.7'
gem "font-awesome-rails"

# static pages in rails
gem 'high_voltage', '~> 3.0.0'

# Markdown
gem 'redcarpet', '~> 2.3.0'

########## # React Rails ##########
gem 'react_on_rails', '10.0.2'
gem 'webpacker'

########## Authentication ##########
gem 'devise'
gem 'devise-i18n'
gem 'omniauth'
gem 'omniauth-twitter'
gem 'devise-bootstrap-views'

### Settings
gem 'config'
gem 'figaro'


group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem "awesome_print"

  gem "foreman", require: false

  ################################################################################
  gem "spring"
  gem "spring-commands-rspec"
  gem 'guard-rspec', '~> 4.6', require: false
  gem 'guard-migrate', require: false
  gem 'guard-rubocop', require: false
  gem 'guard-spring'
  gem "factory_bot_rails"
  gem "faker"

  ################################################################################
  # Manage application processes
  gem "foreman"
  ################################################################################
  # Linters and Security
  gem "rubocop", require: false
  gem "rubocop-rspec", require: false
  gem "ruby-lint", require: false
  # Critical that require: false be set! https://github.com/brigade/scss-lint/issues/278
  gem "brakeman", require: false
  gem "bundler-audit", require: false
  gem "scss_lint", require: false

  ################################################################################
  # Favorite debugging gems
  gem "pry"
  gem "pry-byebug"
  gem "pry-doc"
  gem "pry-rails"
  gem "pry-rescue"
  gem "pry-stack_explorer"

  ################################################################################
  # Color console output
  gem "rainbow"
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'letter_opener'

  gem 'rack-mini-profiler', require: false
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'bullet'
  gem 'rufo'
  gem 'annotate'

  gem 'growl', require: false
end

group :test do
  gem "capybara"
  gem "capybara-email"
  gem "poltergeist"
  gem 'capybara-webkit'
  gem "selenium-webdriver"
  gem 'capybara-screenshot'
  gem "chromedriver-helper"
  # Page Object Pattern
  gem 'site_prism'
  gem 'simplecov', :require => false
  gem "coveralls", require: false
  gem "email_spec"
  gem 'timecop'
  gem "shoulda-matchers", require: false
  gem 'database_cleaner'
  gem "launchy"
  gem "autodoc"
  gem "rspec-rails"
  gem "rspec-retry"
  # gem 'webmock'
  # gem 'vcr'
end

gem 'mini_racer', platforms: :ruby
