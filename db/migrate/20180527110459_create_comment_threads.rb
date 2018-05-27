class CreateCommentThreads < ActiveRecord::Migration[5.1]
  def change
    create_table :comment_threads do |t|
      t.string :commentable_type
      t.integer :commentable_id
      t.datetime :closed_at

      t.timestamps
    end
    add_index :comment_threads, :closed_at
    add_index :comment_threads, [:commentable_type, :commentable_id], unique: true
  end
end
