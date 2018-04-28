VCR.configure do |c|
  c.cassette_library_dir = 'spec/vcr'
  c.hook_into :webmock
  c.configure_rspec_metadata!

  c.default_cassette_options = {
    allow_playback_repeats: true,
    record: :new_episodes
  }
  
  c.ignore_localhost = true
  c.allow_http_connections_when_no_cassette = true
end
