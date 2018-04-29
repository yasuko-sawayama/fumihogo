class AddRestrictedToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :restricted, :boolean, default: false
  end
end
