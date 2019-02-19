json.info do
  json.listType 'author'
  json.author do
    json.name @user.social_account_name
    json.nickname @user.nickname
  end
end

json.products do
  json.array! products do |product|
    json.partial! 'api/v1/shared/product', product: product
  end
end

