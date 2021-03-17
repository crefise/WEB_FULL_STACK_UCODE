let first_name = prompt("First name:");
let second_name = prompt("First name:");
let error = 0;


for (let index = 0; index < first_name.length; index++) {
    if (!isNaN(first_name[index])) {
        error = 1;
        break;
    }
}
for (let index = 0; index < second_name.length; index++) {
    if (!isNaN(second_name[index])) {
        error = 1;
        break;
    }
}
if (error == 0) {
    result_str = new String();
    result_str = first_name[0].toUpperCase();
    result_str += first_name.slice(1, first_name.length).toLowerCase();
    result_str += " ";
    result_str += second_name[0].toUpperCase();
    result_str += second_name.slice(1, second_name.length).toLowerCase();
    alert(result_str);
} 
else {
    alert("name error");
    console.log("name error");
}