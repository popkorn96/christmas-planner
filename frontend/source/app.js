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
    static postFetchCharacter(name, age, favorite_color){
        return fetch(`http://localhost:3000/characters/`, {
            method: 'POST',
            body: JSON.stringify({
                name: name, 
                age: age,
                favorite_color: favorite_color
            }),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            Character.renderFullList(json)
            renderNewCharacterProfile(json)
        })
        // let charForm = document.getElementById('new-char-form')
        // charForm.innerHTML = ""
    }
    static postFetchGift(name, price, character_id){
        return fetch(`http://localhost:3000/gifts/`, {
            method: 'POST',
            body: JSON.stringify({
                name: name, 
                price: price,
                character_id: character_id
            }),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            Gift.renderFullList(json)
            renderNewGiftProfile(json)
        })
        // let charForm = document.getElementById('new-char-form')
        // charForm.innerHTML = ""
    }
}