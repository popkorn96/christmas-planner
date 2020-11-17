class Standard{
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