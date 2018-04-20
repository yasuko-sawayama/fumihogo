json.page do |json|
  json.extract! @page, :id, :title

  json.auth do |auth|
    auth.update policy(@page).update?
  end
  
  json.content policy(@page).update? ? @page.content : markdown(@page.content)
  json.previousPage @page.previous
  json.nextPage @page.next
  json.impressionCount @page.impressions_count
  
  json.product do |product|
    json.extract! @product, :id, :title
    product.about do |about|
      about.pageCount @product.page_count
    end
  end
end
