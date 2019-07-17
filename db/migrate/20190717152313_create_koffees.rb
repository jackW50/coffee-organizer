class CreateKoffees < ActiveRecord::Migration[5.2]
  def change
    create_table :koffees do |t|
      t.string :name
      t.boolean :rainforest_alliance_certified
      t.boolean :favorite
    end
  end
end
