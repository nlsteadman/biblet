class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author_id, :description, :image_url

  has_many :reviews
  has_many :users, through: :reviews
  belongs_to :author
  has_many :booktags
  has_many :tags, through: :booktags
  
end
