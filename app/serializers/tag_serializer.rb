class TagSerializer < ActiveModel::Serializer
  attributes :id, :content

  has_many :booktags
  has_many :books, through: :booktags
end
