class AddImpressionsCountToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :impressions_count, :integer
  end
end
