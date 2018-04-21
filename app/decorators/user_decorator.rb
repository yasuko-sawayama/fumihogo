# TwitterAccessする際はcontextに{ access_token: "xxxxx", access_secret: "xxxxx" }
class UserDecorator < ApplicationDecorator
  delegate_all

  def twitter_lists
    twitter = TwitterClient.new(self, context)
    twitter.user_lists
  end
end
