json.currentUser do |user|
  user.permissions_lists current_user.permissions_lists
end

json.product do
  json.partial! 'shared/json/product', product: @product
end


