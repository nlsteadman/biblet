class Tag < ApplicationRecord
    has_many :booktags
    has_many :books, through: :booktags

    validates :content, presence: true
end
