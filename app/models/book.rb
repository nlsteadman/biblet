class Book < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    belongs_to :author
    has_many :booktags
    has_many :tags, through: :booktags
end
