json.pageInfo do
  json.listType @list_type || 'author'
  json.title @product&.title || @title

  json.author do
    json.name @user&.social_account_name
    json.nickname @user&.nickname
  end
end

json.currentUserData do
  json.partial! 'api/v1/shared/current_user', current_user: current_user
end if current_user

json.productData do
  json.partial! 'api/v1/shared/products', products: @products
end