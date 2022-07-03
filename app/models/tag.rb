class Tag < ApplicationRecord
    has_many :booktags
    has_many :tags, through: :booktags

    validates :content, presence: true
end
