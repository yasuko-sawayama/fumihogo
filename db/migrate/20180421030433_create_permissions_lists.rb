class CreatePermissionsLists < ActiveRecord::Migration[5.1]
  def change
    create_table :permissions_lists do |t|
      t.integer :twitter_list_id, limit: 8
      t.string :name
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :permissions_lists, :twitter_list_id
  end
end
