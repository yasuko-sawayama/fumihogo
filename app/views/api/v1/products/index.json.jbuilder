json.productdata do
  json.currentProduct do
    @product ? json.partial!('api/v1/shared/product', product: @product) : nil
  end

  json.partial! 'api/v1/shared/products', products: @products
end

