class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :books, through: :reviews

    validates :username, presence: true
    validates :password, presence: true
end
