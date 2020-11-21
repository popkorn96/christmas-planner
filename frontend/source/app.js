class App{
    constructor() {
        this.charactersAndGifts = new CharactersAndGifts()
    }
    static fetchOneCharacter(id) {
        return fetch(`http://localhost:3000/characters/${id}`)
        .then(response => response.json())
      }
    
    static fetchOneGift(id) {
      return fetch(`http://localhost:3000/gifts/${id}`)
      .then(response => response.json())
    }
}