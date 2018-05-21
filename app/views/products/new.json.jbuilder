json.currentUser do |_user|
  json.partial! 'shared/json/current_user', current_user: current_user
end

json.product do |_product|
  json.partial! 'shared/json/product', product: @product
end
