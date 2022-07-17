class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id, :content, :finished

  belongs_to :user
  belongs_to :book
  
end
