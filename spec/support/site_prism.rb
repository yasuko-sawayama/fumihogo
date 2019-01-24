# SitePrism.configure do |config|
#   config.use_implicit_waits = true
# end

Dir[File.join(__dir__, './pages/**/*.rb')].each { |f| require f }
