json.info do
  json.listType @list_type || 'author'
  json.title @product&.title
  json.author do
    json.name @user.social_account_name
    json.nickname @user.nickname
  end
end

json.currentProduct do
  @product ? json.partial!('api/v1/shared/product', product: @product) : nil
end

json.products do
  json.array! products do |product|
    json.partial! 'api/v1/shared/product', product: product
  end
end

