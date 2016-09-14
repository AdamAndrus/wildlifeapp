class Animal < ActiveRecord::Base
  has_many :sightings
  validates :common_name, length: { minimum: 2 }
  validates :latin_name, uniqueness: true
  validates :number, numericality: { only_integer: true }
end
