class CharactersAndGifts{
    constructor(){
        this.characters = []
        this.gifts = []
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
            this.renderGifts()
        })
    }
    renderCharacters(){
        const charactersContainer = document.getElementById('character-list')
        charactersContainer.innerText = 'my characters here'
    }
    renderGifts(){
        const giftsContainer = document.getElementById('gift-list')
        giftsContainer.innerHTML = 'my gifts here'
    }
}