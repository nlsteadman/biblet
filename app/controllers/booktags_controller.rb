class BooktagsController < ApplicationController
  before_action :set_booktag, only: [:show, :update, :destroy]

  # GET /booktags
  def index
    @booktags = Booktag.all

    render json: @booktags
  end

  # GET /booktags/1
  def show
    render json: @booktag
  end

  # POST /booktags
  def create
    @booktag = Booktag.new(booktag_params)

    if @booktag.save
      render json: @booktag, status: :created, location: @booktag
    else
      render json: @booktag.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /booktags/1
  def update
    if @booktag.update(booktag_params)
      render json: @booktag
    else
      render json: @booktag.errors, status: :unprocessable_entity
    end
  end

  # DELETE /booktags/1
  def destroy
    @booktag.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booktag
      @booktag = Booktag.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def booktag_params
      params.require(:booktag).permit(:book_id, :tag_id)
    end
end
