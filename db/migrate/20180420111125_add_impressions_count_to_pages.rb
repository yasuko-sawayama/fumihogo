class AddImpressionsCountToPages < ActiveRecord::Migration[5.1]
  def change
    add_column :pages, :impressions_count, :integer, null: false, default: 0
  end
end
