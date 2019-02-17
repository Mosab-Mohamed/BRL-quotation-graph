class CreateExchanges < ActiveRecord::Migration[5.2]
  def change
    create_table :exchanges do |t|
      t.references :from_id
      t.references :to_id
      t.float :rate, null: false

      t.timestamps
    end
  end
end
