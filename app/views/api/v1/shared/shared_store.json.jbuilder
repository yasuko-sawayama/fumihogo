json.currentUserData do
  json.partial! 'api/v1/shared/current_user', current_user: current_user
end if current_user

json.productData do
  json.partial! 'api/v1/shared/products', products: @products
end