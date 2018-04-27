class AddPermissionsListToProducts < ActiveRecord::Migration[5.1]
  def change
    add_reference :products, :permissions_list, foreign_key: true
  end
end
