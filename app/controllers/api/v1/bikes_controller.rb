class Api::V1::BikesController < ApplicationController
  before_action :set_bike, only: [:show, :edit, :update, :destroy]

  # GET /bikes
  # GET /bikes.json
  def index
    @bikes = Bike.all.order(brand: :asc)
    render json: @bikes
  end

  # GET /bikes/1
  # GET /bikes/1.json
  def show
    if @bike
      render json: @bike
    else
      render json: @bike.errors
    end
  end

  # GET /bikes/new
  def new
    @bike = Bike.new
  end

  # GET /bikes/1/edit
  def edit
  end

  # POST /bikes
  # POST /bikes.json
  def create
    @bike = Bike.new(bike_params)


    if @bike.save
      render json: @bike
    else
      render json: @bike.errors
    end
  end

  # PATCH/PUT /bikes/1
  # PATCH/PUT /bikes/1.json
  def update
  end

  # DELETE /bikes/1
  # DELETE /bikes/1.json
  def destroy
    @bike.destroy

    render json: { notice: 'bike was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bike
      @bike = Bike.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bike_params
      params.permit(:brand, :style, :country, :quantity)
    end
end