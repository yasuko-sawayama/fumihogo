json.page do |json|
  json.extract! @page, :id, :title, :content
  json.previousPage @page.previous
  json.nextPage @page.next
  
  json.product do
    json.extract! @product, :id, :title
  end
end
