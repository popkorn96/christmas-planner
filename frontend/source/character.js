class Character{
    constructor(characterJSON){
        this.id = characterJSON.id
        this.name = characterJSON.name
        this.age = characterJSON.age
        this.favorite_color = characterJSON.favorite_color
    }
    renderCard() {
        return (`
        <div class="card" data-id=${this.id}>
          <h2 class="card-title">${this.name}</h2>
          <div class="card-content">
            <p div class="card-fav-color">Age: ${this.age}</p>
            <p div class="card-fav-color">Favorite Color: ${this.favorite_color}</p>
            <p div class="gift-list"></p>
            <div class="new-gift-container" data-id=${this.id}><br>
            <button type="button">Add New Gift!</button>
            </div>
          </div>
          
        </div>
        `)
        function addTrainers(json) {
            const main = document.getElementsByTagName('main')[0];
            for (let i = 0; i < json.length; i++) {
              const div = document.createElement('div')
              div.className = "card"
              div.setAttribute('data-id', json[i].id)
              const p = document.createElement('p')
              p.innerHTML = json[i].name
              div.appendChild(p)
              const button = document.createElement('button')
              button.setAttribute('data-trainer-id', json[i].id)
              button.innerHTML = "Add Pokemon"
              button.addEventListener("click", addPokemon)
              div.appendChild(button)
              const ul = document.createElement('ul')
              for (let j = 0; j < json[i].pokemons.length; j++) {
                const li = document.createElement('li')
                li.innerHTML = `${json[i].pokemons[j].nickname} (${json[i].pokemons[j].species})`
                const removeButton = document.createElement('button')
                removeButton.innerHTML = "Release"
                removeButton.className = "release"
                removeButton.setAttribute('data-pokemon-id', json[i].pokemons[j].id)
                removeButton.addEventListener("click", removePokemon)
                li.appendChild(removeButton)
                ul.appendChild(li)
              }
              div.appendChild(ul)
              main.appendChild(div)
            }
          }
    }
    // htmlify() {
        
    // }
}