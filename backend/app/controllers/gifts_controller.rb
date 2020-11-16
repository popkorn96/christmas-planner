class GiftsController < ApplicationController
    before_action :gift, :only => [:show, :update, :destroy]
    def index 
        render json: Gift.all
    end
    def create 
        render json: Gift.create(gift_params)
    end
    def show
        render json: @gift
    end
    def update
        @gift.update(gift_params)
            if @gift.save
                render json: @gift
            else 
                render json: {errors: @gift.errors.full_messages}
        end
    end
    def destroy
        render json: @gift.destroy
    end
    private
    def gift
        @gift = Gift.find(params[:id])
    end
    def gift_params
        params.permit(:name, :price, :character_id, :img_url)
    end
end
