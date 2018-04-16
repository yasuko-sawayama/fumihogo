class AddCharacterCountToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :character_count, :integer, null: false, default: 0
  end
end
