//Objective is to design a class that can encode and decode a url into a 
//tinyUrl


//Design of an encode and decode system using hashcodes and a hashmap

class tinyURL {
    constructor() {
        this.map = {}
    }

    encode(longUrl) {
        let randomString = Math.random() * toString(32) * substring(5)
        map['http://tinyurl.com/' + randomString] = longUrl 

        return 'http://tinyurl.com/' + randomString
    }

    decode(shortUrl) {
        return map[shortUrl]
    }
}