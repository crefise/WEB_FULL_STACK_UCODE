String.prototype.removeDuplicates = function () {   
    let str = this.valueOf();
    let result_str= "";
    let array_str;

    array_str = str.split(" ");
    for (let index = 0; index < array_str.length; index++) {
        if (array_str[index].length <= 0)
            continue;
        array_str[index].trim();
    }

    let active_array = [];
    let temp = 1;
    for (let index = 0; index < array_str.length; index++) {
       for (let i = 0; i < active_array.length; i++) {
            if (active_array[i] == array_str[index]) {
                temp = 0;
                break
            }
            else {
                temp = 1;
            }
       }
       if (temp == 1) {
        active_array.push(array_str[index])
       }
    }

    for (let index = 0; index < active_array.length; index++) {
        result_str += (active_array[index]+" ");
    }
    result_str = result_str.trim();
    
    return result_str;
}

/*
let str = "Giant Spiders?   What’s next? Giant Snakes?";
console.log(str);
// Giant Spiders?   What’s next? Giant Snakes?
str= str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str= str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str= ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .
str= str.removeDuplicates();
console.log(str);
// . ?
*/