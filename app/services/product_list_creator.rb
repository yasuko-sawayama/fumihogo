class ProductListCreator
  attr_reader :product, :permissions_list

  def initialize(product)
    @product = product
  end

  def sync_twitter_list(twitter_list_id)
    list = PermissionsList.find_or_initialize_by(twitter_list_id: twitter_list_id)

    twitter = TwitterClient.new
    twitter_list = twitter.list(list.twitter_list_id)

    return false unless twitter_list&.user&.id.to_s == product.user.twitter_uid.to_s

    list.name = twitter_list.name
    list.user = product.user
    list.products << product
    list.save
  end
end
