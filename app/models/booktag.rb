class Booktag < ApplicationRecord
    belongs_to :book
    belongs_to :tag
end
