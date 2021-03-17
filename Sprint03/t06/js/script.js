
    let inputed_number = Number(prompt("Input first number (if you wont exit print 'exit'):"));
    let result = inputed_number;

while(1 == 1) {

    let display_str = "Previous result " + result + ". Enter a new number:";
    console.log(result);
    inputed_number = prompt(display_str);
    if (inputed_number == "exit")
        break;
    if (isNaN(inputed_number))
         console.log("Error!")
    else {
        result+= Number(inputed_number);
    }
}