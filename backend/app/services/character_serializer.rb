class CharacterSerializer
    def initialize(char_obj)
        @character = char_obj
    end
    def to_serialized_json
        @character.to_json(:include => {
            :gifts => {
                :except => [:created_at]
            }},
            :except => [:created_at, :updated_at])
    end
end