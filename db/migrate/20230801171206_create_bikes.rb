class CreateBikes < ActiveRecord::Migration[6.1]
  def change
    create_table :bikes do |t|
      t.string :brand
      t.string :model
      t.integer :price
      t.integer :quantity

      t.timestamps
    end
  end
end
