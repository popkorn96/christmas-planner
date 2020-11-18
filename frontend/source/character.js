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
            const b = document.createElement('button')
            b.setAttribute('data-character-id', this.id)
            b.innerHTML = "Add Gift!"
            // button.addEventListener('click', addGift)
            div.appendChild(b)
            const ul = document.createElement('ul')
            ul.innerHTML = "Planned Gifts:"
            for(let g = 0; g < this.gifts.length; g++) {
                const li = document.createElement('li')
                li.innerHTML = `${this.gifts.name}, ($${this.gifts.price})`
                const removeButton = document.createElement('button')
                removeButton.innerHTML = `I found a better gift for ${this.name}`
                removeButton.className = "Remove"
                removeButton.setAttribute('data-gift-id', this.gifts.id)
                // removeButton.addEventListener('click', removeGift)
                li.appendChild(removeButton)
                ul.appendChild(li)
            }
            div.appendChild(ul)
            charactersContainer.appendChild(div)
        }
}