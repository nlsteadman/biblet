class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author_id, :description, :image_url
end
