class CreateAnimals < ActiveRecord::Migration
  def change
    create_table :animals do |t|
      t.string :common_name
      t.string :latin_name
      t.string :kingdom
      t.string :location
      t.integer :number

      t.timestamps null: false
    end
  end
end
