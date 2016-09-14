class DeathController < ApplicationController
  def index
  end

  def death_data
    @deaths = Death.all

    # Rails doesn't want to use AJAX to serve straight up non-form data.
    # So we force it.

    respond_to do |format|
      format.json {
        render :json => @deaths
      }
    end
  end
end
