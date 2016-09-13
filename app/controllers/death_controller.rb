class DeathController < ApplicationController
  def index
    # @deaths = Death.all
  end

  def death_data
    @deaths = Death.all
    # race_data = []

    # @deaths.each do |death|
    #   race_data << death.race
    # end
    
    # race_data = {1 => "test"}

    respond_to do |format|
      format.json {
        render :json => @deaths
      }
    end


    # @deaths.each do |death|
    #   race_data[death.id] = death.race
    # end
    # content_type :json
    # race_data.to_json
  end
end
