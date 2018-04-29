json.id @product.id

json.pages @product.pages, partial: 'shared/json/page', as: :page, locals: { product: @product }
