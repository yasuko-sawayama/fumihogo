json.id @product.id

json.pages @product.pages,
           partial: 'api/v1/shared/page',
           as: :page,
           locals: { product: @product }
