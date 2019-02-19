User.seed_once do |user|
  user.id = 1
  user.nickname = "test1"
end

User.seed do |user|
  user.id = 2
  user.nickname = "test2"
  user.email = "test@test.com"
end