require 'smarter_csv'

class DataController < ApplicationController
  def index

    # options = {:remove_unmapped_keys => true}
    # @data = SmarterCSV.process("data/test.csv", options)
    # csv_text = File.read('data/test.csv')
    # csv = CSV.parse(csv_text, :headers => true)
    # csv.each do |row|
    #   @data << row.to_hash.flatten!.slice[2..11]

      # Datum.create(non_id_portion)
    # end

    @data = Datum.all
  end
end
