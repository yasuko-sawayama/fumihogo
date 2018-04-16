json.product do |product|
  json.extract! @product, :id, :title, :description

  json.auth do |auth|
    auth.update policy(@product).update?
    auth.show policy(@product).show?
  end

  json.author do |author|
    author.nickname @product.user.nickname
    author.id @product.user.id
  end

  json.about do |about|
    about.created_at @product.created_at
    about.charactor_count @product.charactor_count
    about.pageCount @product.page_count
    about.privacyLevel @product.privacy_level_text
  end

  json.pages @product.pages, partial: 'api/v1/products/page', as: :page
end
