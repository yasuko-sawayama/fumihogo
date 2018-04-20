json.page do |json|
  json.extract! @page, :id
  json.pageTitle @page.title

  json.auth do |auth|
    auth.update policy(@page).update?
  end
  
  json.content policy(@page).update? ? @page.content : markdown(@page.content)

  json.previousPage do |previous|
    previous.id @page.previous&.friendly_id
    previous.title @page.previous&.title
  end

  json.nextPage do |nextPage|
    nextPage.id @page.next&.friendly_id
    nextPage.title @page.next&.title
  end

  json.impressionCount @page.impressionist_count
  
  json.product do |product|
    json.extract! @product, :id, :title
    product.about do |about|
      about.pageCount @product.page_count
    end
  end
end
