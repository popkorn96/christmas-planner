class Character{
    constructor(characterJSON){
        this.id = characterJSON.id
        this.name = characterJSON.name
        this.favorite_color = characterJSON.favorite_color
    }
    static renderFullList(character){
        let list = document.getElementById('full-list')
        let a = document.createElement('a')
        a.addEventListener('click', renderCharacterProfile)
        a.classList.add("active", "item")
        list.appendChild(a)
        a.innerText = this.name
        a.dataset.id = this.id
        a.id = `list-${this.id}`
    }
}