class CreateKoffeeRoasts < ActiveRecord::Migration[5.2]
  def change
    create_table :koffee_roasts do |t|
      t.integer :koffee_id
      t.integer :roast_id
      t.timestamps
    end
  end
end
