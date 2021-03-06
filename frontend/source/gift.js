class Gift{
    constructor(giftJSON){
        this.id = giftJSON.id
        this.name = giftJSON.name
        this.price = giftJSON.price
        this.img_url = giftJSON.img_url
        this.character_id = giftJSON.character_id
    }
    static addGiftForm(e){
        let id = e.currentTarget.dataset.id
        console.log(`adding gifts hehe .. ${id}`)
        let char =
        App.fetchOneCharacter(id).then(json => {char = json
        let addGift = document.getElementById('new-gift-form')
        let form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.dataset.id = id 

        let br = document.createElement('br')
        let h = document.createElement('h3')
        h.innerText = `Create a New Gift for ${char.name} ..`

        let giftName = document.createElement('input')
        giftName.setAttribute('type', 'text')
        giftName.setAttribute('id', 'new-gift-name')
        giftName.setAttribute('placeholder', 'Name')

       let  giftPrice = document.createElement('input')
        giftPrice.setAttribute('type', 'text')
        giftPrice.setAttribute('id', 'new-gift-price')
        giftPrice.setAttribute('placeholder', 'Price')

        let giftImg = document.createElement('input')
        giftImg.setAttribute('type', 'text')
        giftImg.setAttribute('id', 'new-gift-img')
        giftImg.setAttribute('placeholder', 'Image Url')

        let s = document.createElement('button')
        s.setAttribute('id', 'new-gift-button')
        s.setAttribute('class', 'button')
        s.innerHTML = `Add this Gift!`

        let s2 = document.createElement('button')
        s2.setAttribute('id', 'cancel-bttn')
        s2.setAttribute('class', 'button2')
        s2.innerHTML = `Cancel`

        addGift.appendChild(form)
        form.appendChild(h)

        form.appendChild(giftName)
        form.appendChild(br.cloneNode())
        form.appendChild(giftPrice)
        form.appendChild(br.cloneNode())
        form.appendChild(giftImg)
        form.appendChild(br.cloneNode())
        form.appendChild(s)
        form.appendChild(s2)
        form.appendChild(br.cloneNode())
        form.appendChild(br.cloneNode())

        let createButton = document.getElementById('new-gift-button')
        createButton.dataset.id = id
        createButton.addEventListener('click', Gift.makeNewGift)

        let cancelButton = document.getElementById('cancel-bttn')
        cancelButton.addEventListener('click', CharactersAndGifts.clearForms)
    })
    }
    static makeNewGift(e){
        let charId = e.currentTarget.dataset.id
        console.log('getting closer.. ')
        let giftName = document.getElementById('new-gift-name').value
        let giftPrice = document.getElementById('new-gift-price').value
        let giftImg = document.getElementById('new-gift-img').value
        Service.postFetchGift(giftName, giftPrice, giftImg, charId)
        CharactersAndGifts.clearForms()
    }
    static removeGift(e){
        let id = e.currentTarget.dataset.id
        fetch(`http:/localhost:3000/gifts/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(json => {
            console.log(`you're in gifts delete..`)
            let giftInfo = document.querySelector('[data-gift-id="' + id + '"]')
            giftInfo.innerHTML = ""
            console.log(`gift removed`)
        })
    }
}