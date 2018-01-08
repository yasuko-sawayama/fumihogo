json.product do |product|
  json.extract! @product, :id, :title
end
