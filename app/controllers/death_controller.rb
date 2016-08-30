class DeathController < ApplicationController
  def index
    @deaths = Death.all
  end

  def race_data
    respond_to do |format|
      format.json {}
    end
  end
end
