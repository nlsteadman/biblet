class Review < ApplicationRecord
    belongs_to :user
    belongs_to :book

    validates :user_id, presence: true
    validates :book_id, presence: true
    validates :user_id, uniqueness: {scope: :book_id}
end
