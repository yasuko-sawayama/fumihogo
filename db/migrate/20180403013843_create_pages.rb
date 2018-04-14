class CreatePages < ActiveRecord::Migration[5.1]
  def change
    create_table :pages do |t|
      t.string :title
      t.integer :position
      t.text :content
      t.references :product, foreign_key: true
      t.integer :character_count

      t.timestamps
    end
    add_index :pages, :title
    add_index :pages, :position
  end
end
