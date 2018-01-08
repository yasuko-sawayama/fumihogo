class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :title, index: true
      t.references :user, foreign_key: true, index: true
      t.text :description, limit: 500

      t.timestamps
    end
  end
end
