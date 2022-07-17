class AddFinishedToReview < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :finished, :boolean, null: false, default: 0
  end
end
