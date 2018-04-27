class PermissionListFactory
  attr_accessor :access_token, :access_secret
  attr_reader :client
  
  def initialize(user, params = {})
    @user = user
    @access_token = params.fetch(:access_token, '')
    @access_secret = params.fetch(:access_secret, '')

    @client = TwitterClient.new(@user,
                                access_token: access_token,
                                access_secret: access_secret)
  end

  def fetch_lists_from_twitter
    raise 'Invalid User.' unless @user.twitter?

    client.user_lists.each do |list|
      add_or_fetch_list(list)
    end

    delete_old_lists
  end

  def add_or_fetch_list(list)
    new_list = @user.permissions_lists
                    .find_or_create_by(twitter_list_id: list.id) do |newlist|
      newlist.name = list.name
    end
    new_list.touch              # 確認時間をupdate
  end

  def delete_old_lists
    @user.permissions_lists.old_lists.from_twitter.destroy_all
  end
end
