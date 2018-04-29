json.page do |json|
  json.id @page.friendly_id
  json.pageTitle @page.title

  json.auth do |auth|
    auth.update policy(@page).update?
  end
  
  json.content policy(@page).update? ? @page.content : markdown(@page.content)

  if @page.previous
    json.previousPage do |previous|
      previous.id @page.previous&.friendly_id
      previous.title @page.previous&.title
    end
  else
    json.previousPage nil
  end

  if @page.next
    json.nextPage do |nextPage|
      nextPage.id @page.next&.friendly_id
      nextPage.title @page.next&.title
    end
  else
    json.nextPage nil
  end

  json.impressionCount @page.impressionist_count
  
  json.product do |product|
    json.extract! @product, :id, :title
    product.about do |about|
      about.pageCount @product.page_count
    end
  end
end
