class CreateGifts < ActiveRecord::Migration[6.0]
  def change
    create_table :gifts do |t|
      t.string :name
      t.string :price
      t.integer :character_id
      t.string :img_url

      t.timestamps
    end
  end
end
