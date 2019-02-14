Product.seed do |product|
  product.id = 1
  product.title = "テストのタイトル"
  product.user_id = 1
  product.description = "テストの説明"
  product.privacy_level = :public_open
end

Page.seed do |page|
  page.id = 1
  page.title = "ページのタイトル"
  page.position = 1
  page.content = "本文"
  page.product_id = 1
end