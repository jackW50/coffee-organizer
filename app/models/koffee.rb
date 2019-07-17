class Koffee < ApplicationRecord
  has_many :koffee_roasts
  has_many :roasts, through: :koffee_roasts
  has_many :comments 
end
