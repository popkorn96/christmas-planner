const app = new App()

console.log('helloooo')


document.addEventListener('DOMContentLoaded', init)
const addCharacter = document.getElementById('new-character-button')
const clearFormsButton = document.getElementById('clear-forms-button')

clearFormsButton.setAttribute('class', 'button2')
function init(){
    addCharacter.addEventListener('click', createNewCharacter)
    clearFormsButton.addEventListener('click', clearForms)
}

function createNewCharacter(){
    Character.newCharacter()
}
function clearForms(){
    CharactersAndGifts.clearForms()
}