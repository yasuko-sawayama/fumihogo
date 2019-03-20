json.currentUser do |_user|
  json.partial! 'api/v1/shared/current_user', current_user: current_user
end

json.product do |_product|
  json.partial! 'api/v1/shared/product', product: @product
end
