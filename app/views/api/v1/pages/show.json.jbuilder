json.page do |json|
  json.extract! @page, :id, :title
  json.content markdown(@page.content)
  json.previousPage @page.previous
  json.nextPage @page.next
  
  json.product do |product|
    json.extract! @product, :id, :title
    product.about do |about|
      about.pageCount @product.page_count
    end
  end
end
