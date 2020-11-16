class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :age
      t.string :favorite_color

      t.timestamps
    end
  end
end
