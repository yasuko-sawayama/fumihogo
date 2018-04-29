json.currentUser do |user|
  json.partial! 'shared/json/current_user', current_user: current_user
end

json.product do
  json.partial! 'shared/json/product', product: @product
end
