# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

c1 = Currency.create(handle: 'BRL')
c2 = Currency.create(handle: 'EUR')
c3 = Currency.create(handle: 'USD')
c4 = Currency.create(handle: 'AUD')

(1..30).each do |i|
    Exchange.create(from_id: c1,to_id: c3, rate: rand(0.2...0.3), created_at: Time.now - (i*10).minutes)
    Exchange.create(from_id: c1,to_id: c2, rate: rand(0.2...0.3), created_at: Time.now - (i*10).minutes)
    Exchange.create(from_id: c1,to_id: c4, rate: rand(0.3...0.4), created_at: Time.now - (i*10).minutes)
end