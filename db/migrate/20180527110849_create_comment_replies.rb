class CreateCommentReplies < ActiveRecord::Migration[5.1]
  def change
    create_table :comment_replies do |t|
      t.references :comment_thread, foreign_key: true
      t.text :content, limit: 2000
      t.integer :status, default: 1, null: false
      t.boolean :anonymous, default: false
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :comment_replies, :status
  end
end
