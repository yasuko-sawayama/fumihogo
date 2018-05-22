class Product::Show < SitePrism::Page
  set_url '/products{/product_id}'

  element :title, '#product h1'
end
