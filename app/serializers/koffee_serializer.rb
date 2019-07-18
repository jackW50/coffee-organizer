class KoffeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :rainforest_alliance_certified, :favorite, :roasts, :comments
  
  has_many :comments, serializer: CommentSerializer
  has_many :roasts, serializer: RoastSerializer
end
