class BooktagSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :tag_id
end
