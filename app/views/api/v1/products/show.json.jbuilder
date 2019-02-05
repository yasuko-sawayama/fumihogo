json.currentUser do |_user|
  json.partial! 'api/v1/shared/current_user', current_user: current_user
end if current_user

json.product do
  json.partial! 'api/v1/shared/product', product: @product
end
