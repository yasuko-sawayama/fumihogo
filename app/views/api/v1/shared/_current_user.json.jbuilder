json.permissions_lists current_user.permissions_lists
json.nickname current_user.nickname
json.avatar current_user.profile_image
if current_user.twitter?
  json.twitterUrl current_user.twitter_url
  json.twitterDisplayName current_user.twitter_displayname
  json.twitterDescription current_user.twitter_description
end
json.currentUserId current_user.id