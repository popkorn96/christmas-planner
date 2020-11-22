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
    static clearForms(){
        let newCharForm = document.getElementById('new-character-form')
        newCharForm.innerHTML = ""
        let newGiftForm = document.getElementById('new-gift-form')
        newGiftForm.innerHTML = ""
        let editCharForm = document.getElementById('edit-char-form')
        editCharForm.innerHTML = ""
        let editCharForm2 = document.getElementById('edit-character-form')
        editCharForm2.innerHTML = ""
    }
}