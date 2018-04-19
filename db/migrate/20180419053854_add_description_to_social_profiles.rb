class AddDescriptionToSocialProfiles < ActiveRecord::Migration[5.1]
  def change
    add_column :social_profiles, :description, :text
  end
end
