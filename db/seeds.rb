# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Roast.create([
  {
    roast_type: 'Light'
  },
  {
    roast_type: 'Medium'
  },
  {
    roast_type: 'Medium-Dark'
  },
  {
    roast_type: 'Dark'
  }
])

Koffee.create([
{
  name: 'BulletProof',
  rainforest_alliance_certified: true,
  favorite: true
},
{
  name: 'Peets',
  rainforest_alliance_certified: false,
  favorite: false
},
{
  name: 'Mud',
  rainforest_alliance_certified: false,
  favorite: true
},
{
  name: 'Verena Street',
  rainforest_alliance_certified: true,
  favorite: false
}
])

coffee = Koffee.all
roast = Roast.all

coffee[0].roasts = [roast[1], roast[3]]
coffee[1].roasts = [roast[0], roast[2], roast[3]]
coffee[2].roasts = [roast[0], roast[1], roast[3]]
coffee[3].roasts = [roast[0], roast[1], roast[2], roast[3]]
