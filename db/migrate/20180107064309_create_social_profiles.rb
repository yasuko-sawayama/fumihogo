class CreateSocialProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :social_profiles do |t|
      t.references :user, foreign_key: true
      t.string :uid, index: true
      t.string :provider, index: true
      t.string :account_name, index: true
      t.string :profile_image
      t.string :url

      t.timestamps
    end
  end
end
