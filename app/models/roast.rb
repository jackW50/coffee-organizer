class Roast < ApplicationRecord
  has_many :koffee_roasts
  has_many :koffees, through: :koffee_roasts
end
