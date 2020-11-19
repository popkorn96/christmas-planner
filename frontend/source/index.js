const app = new App()

console.log('helloooo')


document.addEventListener('DOMContentLoaded', init)
const addCharacter = document.getElementById('new-character-button')
function init(){
    addCharacter.addEventListener('click', createNewCharacter)
}

function createNewCharacter(){
    Character.newCharacter()
}