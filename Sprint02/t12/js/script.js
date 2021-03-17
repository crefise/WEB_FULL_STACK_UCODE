


function concat(string1, string2) {
    let count = 0;
   
    if (string2 == undefined) {
        
        return function test() {
            count += 1;
            test.count= count;
            console.log("TEST");
            str = prompt("wtf");
            return (string1 + " " + str);
        }
   
    }
    else {
        return (string1 + " " + string2);
    }

}



/*

// Hulk smash!
let phrase2= concat("Leave");
output= phrase2();
// a prompt appears. Enter "Hulk alone!" into the prompt
// Leave Hulk alone!
console.log(phrase2.count); 
// 1
output= phrase2();
// a prompt appears. Enter "me alone, please!" into the prompt
console.log(output); // Leave me alone, please!
output= phrase2();
// a prompt appears. Enter "HULK ALONE!" into the prompt
console.log(output); // Leave HULK ALONE!
console.log(phrase2.count); // 3
let phrase3= concat("Go");
output= phrase3();// a prompt appears. Enter "away!" into the prompt
console.log(output); // Go away!
console.log(phrase3.count); // 1
console.log(phrase2.count); // 3
*/