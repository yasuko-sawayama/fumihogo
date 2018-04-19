json.id @product.id

json.pages @product.pages, partial: 'api/v1/products/page', as: :page
