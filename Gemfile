source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.2'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 3.11'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'mini_racer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'haml-rails'
gem 'bootstrap', '~> 4.2.1'
gem 'jquery-rails'
gem 'devise-bootstrap-views', '~> 1.0'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

gem 'react_on_rails', '11.2.2'
gem 'webpacker', '~> 4.x'

########## Authentication ##########
gem 'devise'
gem 'devise-i18n'
gem 'omniauth'
gem 'omniauth-twitter'

### SNS Client
gem 'twitter'

# Decorator Model
gem 'draper'

# Authorization
gem "pundit"

### Settings
gem 'config'
gem 'figaro'

# pagenate
gem 'kaminari'

# static pages in rails
gem 'high_voltage', '~> 3.1'

# for access log
gem 'impressionist'

# for strip title blank
gem "strip_attributes"

# enum i18n
gem 'enumerize'

# Markdown
gem 'redcarpet', '~> 2.3.0'

# character count up
gem 'counter_culture'

#SEO
gem 'meta-tags'

gem 'acts_as_list'
gem 'friendly_id', '~> 5.2.4'

# Bookmark
gem 'acts_as_votable', '~> 0.12.0'

# admin
gem 'rails_admin'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

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
  gem 'pry-remote'
  ################################################################################
  # Color console output
  gem "rainbow"
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem "awesome_print"
  gem 'foreman'

  gem 'letter_opener'

  gem 'rack-mini-profiler', require: false
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'bullet'
  gem 'rufo'
  gem 'annotate'

  # db integration
  gem 'seed-fu', '~> 2.3'
end

group :test do
  gem "capybara"
  gem "capybara-email"
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
  # gem "autodoc"
  gem "rspec-rails"
  gem "rspec-retry"
  gem "rspec_junit_formatter"
  gem 'webmock'
  gem 'vcr'

  gem "factory_bot_rails"
  gem "faker"
end
