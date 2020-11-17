const BASE_URL = "http://localhost:3000";
const CHARACTERS_URL = `${BASE_URL}/characters`;
const GIFTS_URL = `${BASE_URL}/gifts`;
class App{
    static fetchOneCharacter(id) {
        return fetch(CHARACTERS_URL)
        .then(response => response.json())
    }
    static fetchOneTicket(id) {
        return fetch(GIFTS_URL)
        .then(response => response.json())
    }
}