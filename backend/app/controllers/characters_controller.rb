class CharactersController < ApplicationController
    before_action :character, :only => [:show, :update, :destroy]
    def index 
        render json: Character.all
    end
    def create 
        render json: Character.create(character_params)
    end
    def show
        render json: @character
    end
    def update
        @character.update(character_params)
            if @character.save
                render json: @character
            else 
                render json: {errors: @character.errors.full_messages}
        end
    end
    def destroy
        render json: @character.destroy
    end
    private
    def character
        @character = Character.find(params[:id])
    end
    def character_params
        params.permit(:name, :age, :favorite_color)
    end
end
