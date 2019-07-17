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

  def create
    @coffee = Koffee.create(koffee_params)
    render json: @coffee
  end

  def update
    koffee = Koffee.find_by(params[:coffee][:id])
    @coffee = Koffee.update(koffee_params)
    render json: @coffee
  end

  def destroy
    koffee = Koffee.find_by(params[:coffee][:id])
    koffee.koffee_roasts.each do |koffee_roast|
      koffee_roast.destory
    end
    koffee.comments.each do |comment|
      comment.destroy
    end
    koffee.destroy
  end 

end
