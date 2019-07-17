class Koffee < ApplicationRecord
  has_many :koffee_roasts
  has_many :roasts, through: :koffee_roasts
  has_many :comments

  def self.search(query)
    coffees = Koffee.all
    queryString = query.downcase
    coffees.select do |coffee|
      coffee.name.downcase.include?(queryString)
    end
  end

  def self.favorites
    Koffee.where(favorite: true)
  end

  def roast_attributes=(roast_attributes)
    roast.attributes.values.each do |roast_attribute|
      roast = Roast.find_or_create_by(roast_attribute)
      self.roasts << roast
    end
  end

end
