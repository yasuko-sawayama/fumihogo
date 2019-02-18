json.products do
  json.array! products do |product|
    json.partial! 'api/v1/shared/product', product: product
  end
end

