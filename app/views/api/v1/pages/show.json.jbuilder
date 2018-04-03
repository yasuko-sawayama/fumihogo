json.page do |json|
  json.extract! @page, :id, :title, :content

  ppjson.product do
    json.extract! @product, :id, :title
  end
end
