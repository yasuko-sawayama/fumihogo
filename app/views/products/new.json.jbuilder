json.currentUser do |user|
  json.partial! 'shared/json/current_user', current_user: current_user
end

json.product do |product|
  json.partial! 'shared/json/product', product: @product
end


