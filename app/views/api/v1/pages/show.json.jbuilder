json.page do |json|
  json.extract! @page, :id, :title, :content
  json.previousPage nil
  json.nextPage 2
  
  json.product do
    json.extract! @product, :id, :title
  end
end
