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
            const div = document.createElement('div')
            div.className = 'card'
            div.setAttribute('data-id', this.id)
            const p = document.createElement('h2')
            p.innerHTML = this.name
            div.appendChild(p)
            const p1 = document.createElement('p')
            p1.innerHTML = `Age: ${this.age}`
            div.appendChild(p1)
            const p2 = document.createElement('p')
            p2.innerHTML = `Favorite Color: ${this.favorite_color}`
            div.appendChild(p2)
            const b1 = document.createElement('button')
            b1.setAttribute('data-character-id', this.id)
            b1.innerHTML = "Add Gift!"
            // button.addEventListener('click', addGift)
            div.appendChild(b1)
            const ul = document.createElement('ul')
            ul.innerHTML = "Planned Gifts:"
            for(let g = 0; g < this.gifts.length; g++) {
                const li = document.createElement('li')
                let img = document.createElement('img')
                
                img.setAttribute('src', this.gifts[g].img_url)
                img.setAttribute('width', 146);
                img.setAttribute('height', 97);
                img.setAttribute('class', 'gift-img')
                
                li.innerHTML = ` ${this.gifts[g].name}, ($${this.gifts[g].price})` + "<br>"
                li.appendChild(img)
                const removeButton = document.createElement('button')
                removeButton.innerHTML = `I found a better gift for ${this.name}`
                removeButton.className = "Remove"
                removeButton.setAttribute('data-gift-id', this.gifts[g].id)
                // removeButton.addEventListener('click', removeGift) 
                li.appendChild(removeButton)
                ul.appendChild(li)
            }
        div.appendChild(ul)
        charactersContainer.appendChild(div)
    }
    static newCharacter(){
        let addChar = document.getElementById('new-character-form')
        let form = document.createElement('form')
        form.setAttribute("method", "post"); 
        form.setAttribute("action", "submit.php") 

        let br = document.createElement("br")
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

        let s = document.createElement("button")
        s.setAttribute('id', 'new-char-button')
        s.setAttribute('type', 'submit')
        s.setAttribute('value', 'Submit')

        addChar.appendChild(form)

        form.appendChild(charName)
        form.appendChild(br.cloneNode())
        form.appendChild(charAge)
        form.appendChild(br.cloneNode())
        form.appendChild(charFavColor)
        form.appendChild(br.cloneNode())
        form.appendChild(s)
        form.appendChild(br.cloneNode())
     
        // addChar.appendChild(form)
        let createButton = document.getElementById('new-char-button')
        createButton.addEventListener('click', this.makeNewChar)
    }
    static makeNewChar() {
        let form = document.getElementById('new-character-form')
        let charName = document.getElementById('new-char-name').value
        let charAge = document.getElementById('new-char-age').value
        let charFavColor = document.getElementById('new-char-fav-color').value
        App.postFetchCharacter(charName, charAge, charFavColor)
        form.innerHTML = ""
    }
}