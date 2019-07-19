class KoffeesController < ApplicationController

  def index
    if params[:search]
      @coffees = Koffee.search(params[:search])
    elsif params[:favorites]
      @coffees = Koffee.favorites
    else
      @coffees = Koffee.all
    end
    render json: @coffees
  end

  def create
    #binding.pry
    @coffee = Koffee.create(koffee_params)
    render json: @coffee
  end

  def update
    @coffee = Koffee.find_by(id: params[:id])

    @coffee.update(koffee_params)

    render json: @coffee  
  end

  def destroy
    koffee = Koffee.find_by(id: params[:coffee][:id])
    koffee.koffee_roasts.each do |koffee_roast|
      koffee_roast.destory
    end
    koffee.comments.each do |comment|
      comment.destroy
    end
    koffee.destroy
  end

  private

  def koffee_params
    params.require(:koffee).permit(:name, :rainforest_alliance_certified, :favorite, roast_ids: [], roast_attributes: [:roast_type])
  end

end
