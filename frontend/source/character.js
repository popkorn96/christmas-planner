const BASE_URL = "http://localhost:3000";
const CHARACTERS_URL = `${BASE_URL}/characters`;
const GIFTS_URL = `${BASE_URL}/gifts`;

class Character{
    constructor(name, age, favorite_color){
        this.name = name;
        this.age = age;
        this.favorite_color = favorite_color
    }
    static capitalize( string ) {
        return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
    }
    static sanitize( string ) {
        return string.replace( /[^A-Za-z0-9 '-]/g, '' )
    }

    static titleize( string ) {
        let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
        let result = [];
        let arrayOfWords = string.split( " " )
        for ( let i = 0; i < arrayOfWords.length; i++ ) {
            if ( i == 0 ) {
            result.push(this.capitalize(arrayOfWords[i]))
            } else {
            if (exceptions.includes(arrayOfWords[i])){
                result.push(arrayOfWords[i])
            } else {
                result.push(this.capitalize(arrayOfWords[i]))
            }
            }

        }
        return result.join( " " );
    }

}