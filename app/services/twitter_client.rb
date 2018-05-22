class TwitterClient
  attr_reader :access_token, :access_secret, :user, :client

  def initialize(user = nil, params = {})
    @access_token = params.fetch(:access_token, ENV['TWITTER_ACCESS_TOKEN'])
    @access_secret = params.fetch(:access_secret, ENV['TWITTER_ACCESS_SECRET'])

    @user = user
    @client = connect_twitter

    # @rate_limits = Twitter::REST::Request.new(@client,
    # :get, '/1.1/application/rate_limit_status.json').perform
  end

  def user_lists
    return nil unless user
    client.lists.select { |list| list.mode == 'public' }
  end

  def list(list_id)
    client.list(list_id)
  rescue Twitter::Error::NotFound
    nil
  end

  def list_member?(list_id: nil, user: nil)
    client.list_member?(list_id, user&.twitter_uid || '_')
  rescue Twitter::Error::NotFound
    false
  end

  private

  def connect_twitter
    raise 'access token is not valid.' unless access_token && access_secret

    Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV['TWITTER_API_KEY']
      config.consumer_secret     = ENV['TWITTER_API_SECRET']
      config.access_token        = access_token
      config.access_token_secret = access_secret
    end
  end
end
