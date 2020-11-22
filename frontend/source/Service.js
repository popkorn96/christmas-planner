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
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name, 
                age: age,
                favorite_color: favorite_color
            })
        })
        .then(response => response.json())
        .then(json => {
            let newChar = new CharactersAndGifts()
            newChar.renderCharacters(json)
            console.log(`characters rendered..`)
        })
    }
    static postFetchGift(e){
        console.log('getting closer..')
        let charId = e.currentTarget.dataset.id
        let name = document.getElementById('new-gift-name').value
        let price = document.getElementById('new-gift-price').value
        let img_url = document.getElementById('new-gift-img').value
        console.log(`postFetching ${charId}`)
        console.log(`queen bee ${name}`)
        return fetch(`http://localhost:3000/gifts/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                price: price,
                img_url: img_url,
                character_id: charId
            })
        })
        .then(response => response.json())
        .then(json => {       
            CharactersAndGifts.clearForms()
            let newGift = new CharactersAndGifts()
            newGift.renderCharacters(json)
            console.log(`gifts rendered..`)
        })
    }
    static editChar(e){
        e.preventDefault()
        let charId = e.currentTarget.dataset.id
        console.log(`${charId}`)
        let formInputs = e.currentTarget.parentNode.querySelectorAll('input')
        Service.patchEditChar(charId, formInputs[0].value, formInputs[1].value, formInputs[2].value).then(json => {
            let renderNew = new CharactersAndGifts()
            renderNew.renderCharacters(json)
            console.log(`yes?`)
        })
    }
    static patchEditChar(id, name, age, favorite_color){
        return fetch(`http://localhost:3000/characters/${id}`, {
            method: "PATCH",
             body: JSON.stringify ({
                name: name,
                age: age,
                favorite_color: favorite_color
            }),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
                },
            })
            .then(response => response.json())
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