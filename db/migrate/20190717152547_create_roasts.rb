class CreateRoasts < ActiveRecord::Migration[5.2]
  def change
    create_table :roasts do |t|

      t.timestamps
    end
  end
end
