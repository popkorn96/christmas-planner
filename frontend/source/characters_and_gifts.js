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
        const alph = document.getElementById('alph')
        alph.innerText = `Alphabetize!`
        alph.addEventListener('click', this.alphabatize.bind(this))
        this.characters.map( character => 
            character.renderCard()).join('')
    }
    alphabatize(){
        const alph = document.getElementById('alph')
        alph.removeEventListener('click', this.alphabatize)
        alph.innerText = `Sort By Age!`
        alph.addEventListener('click', this.sortByAge.bind(this))
        let charactersContainer = document.getElementById('character-list')
        charactersContainer.innerHTML = ""
        this.characters.sort(function(a, b){
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        }).map( character => character.renderCard()).join('')
    }
    sortByAge(){
        this.charactersContainer.innerHTML = ""
        let alph = document.getElementById('alph')
        alph.removeEventListener('click', this.sortByAge)
        alph.innerText = `Sort by Date Created!`
        alph.addEventListener('click', this.sortByDateCreated.bind(this))
        this.characters.sort(function(a, b){
            var x = a.age;
            var y = b.age;
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0
        }).map( character => character.renderCard()).join('')
    }
    sortByDateCreated(){
        this.charactersContainer.innerHTML = ""
        let alph = document.getElementById('alph')
        alph.removeEventListener('click', this.sortByDateCreated)
        alph.innerText = `Alphabetize!`
        alph.addEventListener('click', this.alphabatize.bind(this))
        this.characters.sort(function(a, b){
            var x = a.id;
            var y = b.id;
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0
        }).map( character => character.renderCard()).join('')
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