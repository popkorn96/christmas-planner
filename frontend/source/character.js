class Character{
    constructor(characterJSON){
        this.id = characterJSON.id
        this.name = characterJSON.name
        this.age = characterJSON.age
        this.favorite_color = characterJSON.favorite_color
        this.gifts = characterJSON.gifts
    }
        renderCard(){
            const charactersContainer = document.getElementById('character-list')
            let br = document.createElement('br')

            const div = document.createElement('div')
            div.className = 'card'
            div.setAttribute('data-id', this.id)
            const p = document.createElement('h2')
            p.setAttribute('id','char-name')
            p.innerHTML = `<i>`+`${this.name}`+`</i>`
            div.appendChild(p)
            const p1 = document.createElement('p')
            p1.setAttribute('id','char-age')
            p1.innerHTML = `Age: ${this.age}`
            div.appendChild(p1)
            const p2 = document.createElement('p')
            p2.setAttribute('id','char-fav-color')
            p2.innerHTML = `Favorite Color: ${this.favorite_color}`
            div.appendChild(p2)
            const b1 = document.createElement('button')
            b1.setAttribute('data-character-id', this.id)
            b1.setAttribute('class', 'button')
            b1.innerHTML = 'Add Gift!'
            b1.dataset.id = this.id
            b1.addEventListener('click', Gift.addGiftForm)
            b1.addEventListener('click', App.topFunction)
            div.appendChild(b1)
            const ul = document.createElement('ul')
            ul.setAttribute('id', 'gift-list')
            ul.innerHTML = 'Planned Gifts:'
            for(let g = 0; g < this.gifts.length; g++) {
                const li = document.createElement('li')
                li.setAttribute('data-gift-id', this.gifts[g].id)
                let img = document.createElement('img')
                
                img.setAttribute('src', this.gifts[g].img_url)
                img.setAttribute('width', 146)
                img.setAttribute('height', 97)
                img.setAttribute('class', 'gift-img')
                li.innerHTML = " "
                
                
                li.innerHTML = ` ${this.gifts[g].name} - ($${this.gifts[g].price}) <br>`
                li.appendChild(img) 
                li.innerHTML += `<br>`
                const removeButton = document.createElement('button')
                removeButton.innerHTML = `Remove '${this.gifts[g].name}' ..`
                removeButton.className = 'Remove'
                removeButton.dataset.id = this.gifts[g].id
                removeButton.setAttribute('class', 'button2')
                removeButton.addEventListener('click', Gift.removeGift)
                removeButton.addEventListener('click', App.topFunction) 
                li.appendChild(removeButton)
                li.innerHTML += `<br><br><br>`
                ul.appendChild(li)
            }
        div.appendChild(ul)
        div.appendChild(br)
        const b2 = document.createElement('button')
        b2.innerHTML = `Remove ${this.name}`
        b2.dataset.id = this.id
        b2.setAttribute('class', 'button2')
        b2.addEventListener('click', Character.removeCharacter)
        b2.addEventListener('click', App.topFunction)

        const b3 = document.createElement('button')
        b3.innerHTML = `Edit ${this.name}'s Info`
        b3.dataset.id = this.id
        b3.setAttribute('class', 'button')
        b3.addEventListener('click', Character.editCharacter)
        b3.addEventListener('click', App.topFunction)

        div.appendChild(b3)
        div.appendChild(b2)
        charactersContainer.appendChild(div)
    }
    static newCharacter(){
        let addChar = document.getElementById('new-character-form')
        let form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', 'submit.php') 

        let br = document.createElement('br')
        let h = document.createElement('h4')
        h.innerText = `Creating A New Giftee ...`

        let charName = document.createElement('input')
        charName.setAttribute('type', 'text')
        charName.setAttribute('id', 'new-char-name')
        charName.setAttribute('placeholder', 'Name: ')

        let charAge = document.createElement('input')
        charAge.setAttribute('type', 'text')
        charAge.setAttribute('id', 'new-char-age')
        charAge.setAttribute('placeholder', 'Age: ')

        let charFavColor = document.createElement('input')
        charFavColor.setAttribute('type', 'text')
        charFavColor.setAttribute('id', 'new-char-fav-color')
        charFavColor.setAttribute('placeholder', 'Favorite Color: ')

        let s = document.createElement('button')
        s.setAttribute('id', 'new-char-button')
        s.setAttribute('class', 'button')
        s.innerHTML = `Add this Giftee!`

        let s2 = document.createElement('button')
        s2.setAttribute('id', 'cancel-bttn')
        s2.setAttribute('class', 'button2')
        s2.innerHTML = `Cancel`


        addChar.appendChild(form)

        form.appendChild(h)
        form.appendChild(charName)
        form.appendChild(br.cloneNode())
        form.appendChild(charAge)
        form.appendChild(br.cloneNode())
        form.appendChild(charFavColor)
        form.appendChild(br.cloneNode())
        form.appendChild(s)
        form.appendChild(s2)
        form.appendChild(br.cloneNode())
        form.appendChild(br.cloneNode())

     
        let createButton = document.getElementById('new-char-button')
        createButton.addEventListener('click', this.makeNewChar.bind(this))

        let cancelButton = document.getElementById('cancel-bttn')
        cancelButton.addEventListener('click', CharactersAndGifts.clearForms)
    }
    static makeNewChar(e){
        e.preventDefault()
        let form = document.getElementById('new-character-form')
        let charName = document.getElementById('new-char-name').value
        let charAge = document.getElementById('new-char-age').value
        let charFavColor = document.getElementById('new-char-fav-color').value
        Service.postFetchCharacter(charName, charAge, charFavColor)
        let charList = document.getElementById('character-list')
        charList.innerHTML = ""
        form.innerHTML = ''
    }
    static editCharacter(e){
        let id = e.currentTarget.dataset.id
        let char = 
        App.fetchOneCharacter(id).then(json => {char = json
        let charInfo = document.getElementById('edit-char-form')
        let editForm = document.createElement('form')
        editForm.dataset.id = id

        let br = document.createElement('br')
        let h = document.createElement('h4')
        h.innerText = `Editing ${char.name}'s Info..`

        let charName = document.createElement('input')
        charName.setAttribute('type', 'text')
        charName.setAttribute('id', 'edit-char-name')
        charName.setAttribute('value', `${char.name}`)

        let charAge = document.createElement('input')
        charAge.setAttribute('type', 'text')
        charAge.setAttribute('id', 'edit-char-age')
        charAge.setAttribute('value', `${char.age}`)

        let charFavColor = document.createElement('input')
        charFavColor.setAttribute('type', 'text')
        charFavColor.setAttribute('id', 'edit-char-fav-color')
        charFavColor.setAttribute('value', `${char.favorite_color}`)

        let s = document.createElement('button')
        s.setAttribute('id', 'submit-edit-bttn')
        s.setAttribute('class', 'button')
        s.innerHTML = `Submit Edits`
        s.dataset.id = this.id
        s.addEventListener('click', Service.editChar)

        let s2 = document.createElement('button')
        s2.setAttribute('id', 'cancel-edits-bttn')
        s2.setAttribute('class', 'button2')
        s2.innerHTML = `Cancel`

        charInfo.appendChild(editForm)

        editForm.appendChild(h)
        editForm.appendChild(charName)
        editForm.appendChild(br.cloneNode())
        editForm.appendChild(charAge)
        editForm.appendChild(br.cloneNode())
        editForm.appendChild(charFavColor)
        editForm.appendChild(br.cloneNode())
        editForm.appendChild(s)
        editForm.appendChild(s2)
        editForm.appendChild(br.cloneNode())
        editForm.appendChild(br.cloneNode())
        
       document.getElementById('edit-char-name').placeholder = `Name`
       document.getElementById('edit-char-age').placeholder = `Age`
       document.getElementById('edit-char-fav-color').placeholder = `Favorite Color`

        
        let cancel = document.getElementById('cancel-edits-bttn')
        cancel.addEventListener('click', CharactersAndGifts.clearForms)
        let submitButton = document.getElementById('submit-edit-bttn')
        submitButton.dataset.id = id
        submitButton.addEventListener('click', Service.patchEditChar(id))
        
        console.log(`${id}`)
    })
    }
    static removeCharacter(e){
        let id = e.currentTarget.dataset.id
        fetch(`http://localhost:3000/characters/${id}`, {
        method: "DELETE"
        })
        .then(response => response.json())
        .then(json => {
            console.log(`you're in delete`)
            let charInfo = document.querySelector('[data-id="' + id + '"]')
            charInfo.innerHTML = ""
            let container = document.getElementById('character-list')
            container.removeChild(charInfo)
            console.log(`character removed..`)
        })
    }

}