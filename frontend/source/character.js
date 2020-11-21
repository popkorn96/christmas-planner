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
            p.innerHTML = this.name
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
            // b1.addEventListener('click', addGift)
            div.appendChild(b1)
            const ul = document.createElement('ul')
            ul.innerHTML = 'Planned Gifts:'
            for(let g = 0; g < this.gifts.length; g++) {
                const li = document.createElement('li')
                let img = document.createElement('img')
                
                img.setAttribute('src', this.gifts[g].img_url)
                img.setAttribute('width', 146)
                img.setAttribute('height', 97)
                img.setAttribute('class', 'gift-img')
                
                li.innerHTML = ` ${this.gifts[g].name}, ($${this.gifts[g].price})` + '<br>'
                li.appendChild(img)
                li.appendChild(br)
                const removeButton = document.createElement('button')
                removeButton.innerHTML = `Remove '${this.gifts[g].name}' ..`
                removeButton.className = 'Remove'
                removeButton.setAttribute('data-gift-id', this.gifts[g].id)
                removeButton.setAttribute('class', 'button2')
                // removeButton.addEventListener('click', removeGift) 
                li.appendChild(br)
                li.appendChild(removeButton)
                ul.appendChild(li)
            }
        div.appendChild(ul)
        div.appendChild(br)
        const b2 = document.createElement('button')
        b2.innerHTML = `Remove ${this.name}`
        b2.dataset.id = this.id
        b2.setAttribute('class', 'button2')
        b2.addEventListener('click', Character.removeCharacter)

        const b3 = document.createElement('button')
        b3.innerHTML = `Edit ${this.name}'s Info`
        b3.dataset.id = this.id
        b3.setAttribute('class', 'button')
        b3.addEventListener('click', Character.editCharacter)

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
        let h = document.createElement('h3')
        h.innerText = `Create A New Giftee`

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
        s.innerHTML = `Add this Giftee!`

        let s2 = document.createElement('button')
        s2.setAttribute('id', 'cancel-bttn')
        s2.innerHTML = `Cancel`


        addChar.appendChild(form)

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
        cancelButton.addEventListener('click', this.removeNewCharForm.bind(this))
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
        let charInfo = document.getElementById('edit-char-form')
        let editForm = document.createElement('form')
        editForm.setAttribute('method', 'patch')
        editForm.setAttribute('action', 'submit.php')

        let br = document.createElement('br')
        let h = document.createElement('h4')
        h.innerText = `Edit Info..`

        let charName = document.createElement('input')
        charName.setAttribute('type', 'text')
        charName.setAttribute('id', 'edit-char-name')
        charName.setAttribute('placeholder', 'Name: ')

        let charAge = document.createElement('input')
        charAge.setAttribute('type', 'text')
        charAge.setAttribute('id', 'edit-char-age')
        charAge.setAttribute('placeholder', 'Age: ')

        let charFavColor = document.createElement('input')
        charFavColor.setAttribute('type', 'text')
        charFavColor.setAttribute('id', 'edit-char-fav-color')
        charFavColor.setAttribute('placeholder', 'Favorite Color: ')

        let s = document.createElement('button')
        s.setAttribute('id', 'submit-edit-bttn')
        s.innerHTML = `Submit Edits`

        let s2 = document.createElement('button')
        s2.setAttribute('id', 'cancel-edits-bttn')
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
        

        let currentName = document.getElementById('char-name').innerHTML
        let currentAge = document.getElementById('char-age').innerHTML
        let currentFavColor = document.getElementById('char-fav-color').innerHTML
       document.getElementById('edit-char-name').placeholder = currentName
       document.getElementById('edit-char-age').placeholder = currentAge
       document.getElementById('edit-char-fav-color').placeholder = currentFavColor

        let editButton = document.getElementById('submit-edit-bttn')
        editButton.dataset.id = this.id
        editButton.addEventListener('click', this.editChar)

        let cancelButton = document.getElementById('cancel-edits-bttn')
        cancelButton.addEventListener('click', this.removeEditCharForm)
        
        console.log(`${id}`)
    }
    static removeNewCharForm(){
        let newCharForm = document.getElementById('new-character-form')
        newCharForm.innerHTML = ""
    }
    static removeEditCharForm(){
        let editCharForm = document.getElementById('edit-char-form')
        editCharForm.innerHTML = ""
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
    static editChar(e){
        let id = e.currentTarget.dataset.id
        let name = document.getElementById('edit-char-name').value
        let age = document.getElementById('edit-char-age').value
        let favorite_color = document.getElementById('edit-char-fav-color').value
    fetch(`http://localhost:3000/characters/${id}`, {
      method: "PATCH",
      headers: {"Content-type": "application/json",
                "Accept": "application/json"
            },
      body: JSON.stringify ({
        name: name,
        age: age,
        favorite_color: favorite_color
      })
    }).then(response => response.json())
    .then(json => {
      renderNewTripProfile(json)
    })
    }
}