json.twitter_lists @user.twitter_lists do |list|
  json.name list.name
  json.twitter_list_id list.id
end
