class Service{
    constructor(){
        this.charactersUrl = 'http://localhost:3000/characters',
        this.giftsUrl = 'http://localhost:3000/gifts'
    }
    
    getCharacters(){
        return fetch(this.charactersUrl)
        .then(response => response.json())
    }
    getGifts(){
        return fetch(this.giftsUrl)
        .then(response => response.json())
    }
}