
json.extract! product, :id, :title, :description

json.auth do |auth|
  auth.update policy(product).update?
  auth.show policy(product).show?
end

json.author do |author|
  author.nickname product&.user&.nickname
  author.id product&.user&.id
end

json.about do |about|
  about.created_at l product.created_at if product.persisted?
  about.character_count product.character_count
  about.pageCount product.page_count
  about.privacyLevel product.privacy_level_text
  if product.privacy_level.list?
    about.permissionsList do |list|
      list.id product.permissions_list.id
      list.name product.permissions_list.name
    end
  end
  about.impressionCount product.impressionist_count
end

json.pages product.pages, partial: 'shared/json/page', as: :page, locals: { product: product }
