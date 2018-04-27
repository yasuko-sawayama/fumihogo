class CreateMemberPermissions < ActiveRecord::Migration[5.1]
  def change
    create_table :member_permissions do |t|
      t.references :user, foreign_key: true
      t.references :permissions_list, foreign_key: true

      t.timestamps
    end
  end
end
