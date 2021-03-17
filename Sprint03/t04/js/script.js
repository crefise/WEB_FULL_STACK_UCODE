

houseMixin = {
    wordReplace:  function(text_1, text_2) {
            this.description = this.description.replace(text_1, text_2); 
    },
    wordDelete: function(text_1) {
        this.wordReplace(text_1, "");
    },
    wordInsertAfter: function(text_1, text_2) {
        this.wordReplace(text_1, text_1+" "+text_2);
    },
    wordEncrypt: function() {
        this.description = this.description.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
    },
    wordDecrypt: function() {
        this.wordEncrypt();
    }
}

/*

const house = new HouseBuilder('88 Crescent Avenue',
            'Spacious town house with wood flooring, 2-car garage, wood and a back  wood patio.',
            'J. Smith',
            110,
            5);


Object.assign(house ,houseMixin);



console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.
house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.

house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.
house.wordInsertAfter("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.

*/