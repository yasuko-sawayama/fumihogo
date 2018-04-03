json.page do |json|
  json.extract! @page, :id, :title, :content

  json.product do
    json.extract! @product, :id, :title
  end
end
