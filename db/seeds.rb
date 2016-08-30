# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'smarter_csv'    

options = {:remove_unmapped_keys => true, :chunk_size => 100}
csv = SmarterCSV.process("data/death.csv", options)
csv.each do |row|
  Death.create(row)
end
