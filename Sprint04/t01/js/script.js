let array_childer = document.getElementById("characters").children;


for (let index = 0; index < array_childer.length; index++) {
    let current = array_childer[index].classList;
    if (current.length != 1 || (current.contains('good') == false && current.contains('evil') == false && current.contains('unknown') == false)) {
        if (current.length > 0)
            current.remove(current);
        current.add('unknown');
    }
 
    let atributes_str = array_childer[index].dataset.element;
    let atributes_arr;
    if (atributes_str) {
        atributes_arr = atributes_str.split(" ");
    }
    else {
        atributes_arr = [ "none"];
    }
    let temp_br = document.createElement("br");
    array_childer[index].appendChild(temp_br);
    for (let i = 0; i < atributes_arr.length; i++) {
        let new_div = document.createElement("div");

        if (atributes_arr[0] == "none") {
            new_div.classList.add('none');
            new_div.classList.add('elem');
        }
        else {
            new_div.classList.add('elem');
            new_div.classList.add(atributes_arr[i]);
        }

        
        array_childer[index].appendChild(new_div);
    }
}   


let temp = document.getElementsByClassName("none");
for (let index = 0; index < temp.length; index++) {
    let line_div = document.createElement("div");
    line_div.classList.add('line')
    temp[index].appendChild(line_div);
    
}
