class Book < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    belongs_to :author
    has_many :booktags
    has_many :tags, through: :booktags
    validates :title, presence: true
    validates :author_id, presence: true
end
