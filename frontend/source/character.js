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
    }
    // htmlify() {
        
    // }
}