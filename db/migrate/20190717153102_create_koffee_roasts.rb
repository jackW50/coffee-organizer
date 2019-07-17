class CreateKoffeeRoasts < ActiveRecord::Migration[5.2]
  def change
    create_table :koffee_roasts do |t|

      t.timestamps
    end
  end
end
