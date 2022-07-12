class BooktagSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :tag_id

  belongs_to :book
  belongs_to :tag
end
