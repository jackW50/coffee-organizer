class KoffeesController < ApplicationController

  def index
    #if params[:search]
      #@coffees = Koffee.search
    #elsif params[:favorites]
      #@coffees = Koffee.favorites
    else
      @coffees = Koffee.all
    end
    render json: @coffees
  end
end
