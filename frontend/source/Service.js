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
    static postFetchCharacter(name, age, favorite_color){
        return fetch(`http://localhost:3000/characters/`, {
            method: "POST",
            body: JSON.stringify({
                name: name, 
                age: age,
                favorite_color: favorite_color
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => {
            let newChar = new CharactersAndGifts()
            newChar.renderCharacters(json)
            console.log(`characters rendered..`)
        })
    }
    static postFetchGift(name, price, character_id){
        return fetch(`http://localhost:3000/gifts/`, {
            method: "POST",
            body: JSON.stringify({
                name: name, 
                price: price,
                character_id: character_id
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => {
            CharactersAndGifts.fetchAndLoadCharacters(json)
            console.log(`characters rendered..`)
        })
    }
    // static deleteTrip(event) {
    //     let id = event.currentTarget.dataset.id
    //     fetch(`http://localhost:3000/trips/${id}`, {
    //     method: "DELETE"
    //   })
    //   .then(response => response.json())
    //   .then(json => {
    //     let tripInfo = document.getElementById('twelve')
    //     let sideInfo = document.getElementById('invertedMenu')
    //     tripInfo.innerHTML = ""
    //     let sideTrip = document.querySelector(`#sidebar-${id}`)
    //     sideInfo.removeChild(sideTrip)
    //     })
    //   }
}   