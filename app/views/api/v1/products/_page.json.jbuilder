json.id page.position
json.extract! page, :position, :title
json.api api_v1_product_page_path(@product, page)
