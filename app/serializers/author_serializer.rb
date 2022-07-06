class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :name, :statement, :image_url

  has_many :books
end
