json.pageInfo do
  json.listType @list_type || 'author'
  json.title @product&.title || @title

  json.author do
    json.name @user&.social_account_name
    json.nickname @user&.nickname
  end
end

json.currentUserData do
  json.partial! 'api/v1/shared/current_user', current_user: current_user
end if current_user

json.productData do
  if @product
    json.currentProduct do
      json.partial!('api/v1/shared/product', product: @product)
    end

    p @product
    json.currentPage do
       json.partial!('api/v1/shared/page', page: @page || @product.pages.first)
    end
  end

  json.partial! 'api/v1/shared/products', products: @products
end
