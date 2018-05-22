json.currentUser do |_user|
  json.partial! 'shared/json/current_user', current_user: current_user
end
