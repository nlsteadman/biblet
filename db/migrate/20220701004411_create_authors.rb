class CreateAuthors < ActiveRecord::Migration[6.1]
  def change
    create_table :authors do |t|
      t.string :name
      t.text :statement
      t.string :image_url

      t.timestamps
    end
  end
end
