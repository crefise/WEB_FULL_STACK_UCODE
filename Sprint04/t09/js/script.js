let result_str = "";
function add() {
    let str = input_t.value;

    let data = new Date();


    let minutes = data.getMinutes();
    let second = data.getSeconds();
    let hours = data.getFullYear()+1;
    if(minutes < 10)
        minutes = "0"+minutes;

    if(second < 10)
        second = "0"+second;

    if(hours < 10)
        hours = "0"+hours;

    str += ` [${data.getDate()}.0${data.getMonth()}.${hours}, ${data.getHours()}:${minutes}:${second}]`;





    result_str+= "<br>-->" +str;

    console.log(result_str);

    history1.innerHTML = result_str;
    localStorage.setItem("storage", result_str);
}

function clear_str() {
    console.log("test");
    localStorage.clear();
    history1.innerHTML = "";
}

result_str = localStorage.storage;
if (result_str == undefined) {
    result_str = "";
}
history1.innerHTML = result_str;

