const BASE_URL = "http://localhost:3000";
const CHARACTERS_URL = `${BASE_URL}/characters`;
const GIFTS_URL = `${BASE_URL}/gifts`;

class App{
    static fetchOneCharacter(id) {
        return fetch(CHARACTERS_URL)
        .then(response => response.json())
        .then(data => {
            postFetchCharacter(data)
        })
    }
    static fetchOneGift(id) {
        return fetch(GIFTS_URL)
        .then(response => response.json())
        .then(data => {
            postFetchGift(data)
        })
    }
    static postFetchCharacter(name, age, favorite_color){
        method: (CHARACTERS_URL, {
        body: JSON.stringify({
            name: name,
            age: age,
            favorite_color: favorite_color
        })
    })}
    static postFetchGift(name, price, img_url){
        return fetch(GIFTS_URL, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            price: price,
            img_url: img_url,
        })
    })}
}