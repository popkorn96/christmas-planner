class CharactersAndGifts{
    constructor(){
        this.characters = []
        this.gifts = []
        this.charactersContainer = document.getElementById('character-list')
        this.service = new Service()
        // this.bindEventListeners()
        this.fetchAndLoadCharacters()
        this.fetchAndLoadGifts()
    }
    fetchAndLoadCharacters(){
        this.service
        .getCharacters()
        .then(characters => {
            characters.forEach(character => this.characters.push(new Character(character)))
        })
        .then(() => {
            this.renderCharacters()
        })
    }
    fetchAndLoadGifts(){
        this.service
        .getGifts()
        .then(gifts => {
            gifts.forEach(gift => this.gifts.push(new Gift(gift)))
        })
        .then(() => {
            console.log(this.gifts)
            // this.renderGifts()
        })
    }
    renderCharacters(){
        this.characters.map( character => 
            character.renderCard()).join('')
    }
    // renderGifts(){
    //     const giftsContainer = document.getElementById('full-gift-list')
    //     giftsContainer.innerHTML = 'Gifts'
    // }
}