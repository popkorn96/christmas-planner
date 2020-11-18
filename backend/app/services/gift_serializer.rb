class GiftSerializer
    def initialize(gift_obj)
        @gift = gift_obj
    end
    def to_serialized_json
        @gift.to_json()
    end
end