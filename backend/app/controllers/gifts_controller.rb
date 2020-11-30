class GiftsController < ApplicationController
    before_action :gift, :only => [:show, :update, :destroy]
    def index 
        gifts = Gift.all
        render json: GiftSerializer.new(gifts).to_serialized_json
    end
    def create 
        render json: Gift.create(gift_params)
    end
    def show
        render json: GiftSerializer.new(@gift).to_serialized_json
    end
    def update
        @gift.update(gift_params)
            if @gift.save
                render json: GiftSerializer.new(@gift).to_serialized_json
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
        params.permit(:name, :price, :img_url, :character_id)
    end
end
