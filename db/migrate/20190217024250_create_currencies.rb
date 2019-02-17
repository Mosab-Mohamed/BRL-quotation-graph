class CreateCurrencies < ActiveRecord::Migration[5.2]
  def change
    create_table :currencies do |t|
      t.string :handle, null: false, index: true, unique: true

      t.timestamps
    end
  end
end
