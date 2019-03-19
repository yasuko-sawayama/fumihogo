json.pageInfo do
  json.listType 'favorite'
  json.title 'お気に入り'
end

json.likes do
  json.partial! 'api/v1/shared/products', products: @products
end