json.extract! product, :id, :title, :description

json.auth do |auth|
  auth.update policy(product).update?
  auth.show policy(product).show?
end

json.author do |author|
  author.nickname product&.user&.nickname
  author.id product&.user&.id
end

json.info do |about|
  about.created_at l product.created_at if product.persisted?
  about.character_count product.character_count
  about.page_count product.page_count
  about.privacy_level product.privacy_level
  about.privacy_level_text product.privacy_level_text

  # in: { closed: 0,
  #       public_open: 1,
  #       login: 2,
  #       list: 3 }
  if product.privacy_level.list?
    about.permissions_list do |list|
      list.id product.permissions_list.id
      list.name product.permissions_list.name
    end
  end
  about.impression_count product.impressionist_count
end

json.pages product.pages,
           partial: 'api/v1/shared/page',
           as: :page,
           locals: {product: product}