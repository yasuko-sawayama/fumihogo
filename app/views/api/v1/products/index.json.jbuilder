json.productData do
  json.partial! 'api/v1/shared/products', products: @products
end

