class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :name, :statement, :image_url
end
