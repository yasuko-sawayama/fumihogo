class AddPrivacyLevelToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :privacy_level, :integer, default: 1
    add_index :products, :privacy_level
  end
end
