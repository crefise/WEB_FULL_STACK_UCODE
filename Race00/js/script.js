let mode = 0;
let im = 0;
let CONVERT = 0
class calculator {

    constructor() {
        this.result = 0;
        this.history = "";
        this.eval_str = "";
        this.active_num = null;
        this.pow = null;
    }
    is_correct(value) {

        let size = this.history.length;
        let last = this.history[size - 1];
        let dot_counter = 0;
        if (last == "IM" && value == "IM") {
            return true;
        }
        if (last == value && isNaN(value) && mode != 0 && im !=0) {
            return false;
        }
        if (last == "." && isNaN(value)) {
            return false;
        }
        if (last == "%" && !isNaN(value)) {
            return false;
        }
        if (this.active_num == null && value == ".") {
            return false;
        }
        if (this.active_num == null && value == "%") {
            return false;
        }
        if (this.active_num == null && value == "X!") {
            return false;
        }
        if (this.active_num == null && value == "*") {
            return false;
        }
        if (this.active_num == null && value == "/") {
            return false;
        }
        if (this.active_num == null && value == "+/-") {
            return false;
        }
        if (this.active_num == null && value == "^") {
            return false;
        }
        if (this.active_num == null && value == "√") {
            return false;
        }
        if (value == ".") {
            for (let index = 0; index < this.active_num.length; index++) {
                if(this.active_num[index] == ".") {
                    dot_counter++;
                }
            }
        }
        if (dot_counter >= 1)
            return false;
        return true;
    }
    press_key(value) {
        if (value == "CONVERT") {
            document.getElementById("list").hidden = false;
            if (CONVERT == 0) {
                CONVERT = 1;
                for (let index = 0; index < keys.length; index++) {
                    if (keys[index].value != "CONVERT" && keys[index].value != "=" 
                    && keys[index].value != "0"
                    && keys[index].value != "1"
                    && keys[index].value != "2"
                    && keys[index].value != "3"
                    && keys[index].value != "4"
                    && keys[index].value != "5"
                    && keys[index].value != "6"
                    && keys[index].value != "7"
                    && keys[index].value != "8"
                    && keys[index].value != "9"
                    && keys[index].value != "C") {
                        keys[index].disabled = true;
                        keys[index].classList.add("disabled");
                    }
                }
            }
            else {
                document.getElementById("list").hidden = true;
                for (let index = 0; index < keys.length; index++) {
                    keys[index].disabled = false;
                    keys[index].classList.remove("disabled");
            }
            this.result = 0;
            this.history = "";
            this.eval_str = "";
            document.getElementById("result_span").innerHTML = this.result;
            document.getElementById("history_span").innerHTML = this.history;

                CONVERT = 0;
            }
            return;
        }
        if (value == "IM") {
            if (im == 0) {
                im = 1;
                document.getElementById("history_span").innerHTML = '<input placeholder="0" id = "inp_id">';
                for (let index = 0; index < keys.length; index++) {
                    if (keys[index].value != "IM") {
                        keys[index].disabled = true;
                        keys[index].classList.add("disabled");
                    }
                }
                this.eval_str = "";
                this.active_num = "";
                this.history = "";
            }
            else {
                this.eval_str = document.getElementById("inp_id").value;
                this.result = eval(this.eval_str);
                if (this.result == undefined) {
                    this.result = 0;
                }
                this.active_num = this.result;
                this.history = this.result;
                document.getElementById("result_span").innerHTML = this.result;
                document.getElementById("history_span").innerHTML = this.history;
                im = 0;
                document.getElementById("history_span").innerHTML = '';
                for (let index = 0; index < keys.length; index++) {
                        keys[index].disabled = false;
                        keys[index].classList.remove("disabled");
                }

            }

            return
        }

        
        if (mode == 2) {
            if (value == "M+") {
                value = "a";
            }
            if (value == "MC") {
                value = "b";
            }
            if (value == "MR") {
                value = "c";
            }
            if (value == "√") {
                value = "d";
            }
            if (value == "^") {
                value = "e";
            }
            if (value == "X!") {
                value = "f";
            }
        }
        
      
        if (value == "MODE") {
            this.switch_mode();
            return;
        }
        if (this.history.length > 20) {
            this.press_result();
        }

        if (isNaN(value) && this.pow != null)
            this.check_pow();
        if (this.pow != null) {
            this.history +=value; // добавляем значение в историю
            document.getElementById("history_span").innerHTML = this.history; // записываем значение в историю
            if (this.active_num == null) 
                this.active_num = "";
            this.active_num +=value;
            return;
        }
        if (!this.is_correct(value)){
            console.log("error#1");
            return;
        }
        if (value == "MR" && mode == 0) {
            this.press_MR();
            return;
        }
        if (value == "MC" && mode == 0) {
            this.press_MC();
            return;
        }
        if (value == "M+" && mode == 0) {
            this.press_Mplus();
            return;
        }
        if (value == "M-" && mode == 0) {
            this.press_Mminus();
            return;
        }
        if (value == "C") {
            this.press_reset();
            return;
        }
        if (value == "=") {
            this.press_result();
            return;
        }
        if (value == "+/-") {
            this.press_sign();
            return;
        }
        if (value == "X!") {
            this.press_factorial();
            return;
        }
        if (value == "√") {
            this.press_sqrt();
            return;
        }
        if (value == "^") {
            this.press_pow();
        }
        this.history +=value; // добавляем значение в историю
        document.getElementById("history_span").innerHTML = this.history; // записываем значение в историю


        if (value == "%") { // выполнения действий для процента 
            this.press_percent();
            return;
        }
        if (mode == 2 && (value == "+"  || value == "-") || value == "*" || value == "/") {
            this.eval_str = this.eval_str.slice(0, this.eval_str.length - this.active_num.length);
            this.eval_str += parseInt(this.active_num, 16);
            this.result = Number(eval(this.eval_str)).toString(16);
        }
        this.eval_str += value; // добавляем значение в строку выполнения

        if (mode == 2) {
            console.log(value);
            if (!isNaN(value) || value=='a' 
            || value == 'b'
            || value == 'c'
            || value == 'd'
            || value == 'e'
            || value == 'f') { 
                if (this.active_num == null) 
                    this.active_num = ""; //ожидаем введення чисел
                this.active_num +=value;
                console.log(value);
            }
            else {
                    this.active_num = null;
            }    
        }
        else {
            if (!isNaN(value) || value=='.') { 
                if (this.active_num == null) 
                    this.active_num = ""; //ожидаем введення чисел
                this.active_num +=value;
                this.result = eval(this.eval_str);
            }
            else {
                    this.active_num = null;
            }    
        }

    }
    press_reset() {
        this.history="";
        this.active_num = null;
        this.eval_str = "";
        this.result = 0;
        document.getElementById("result_span").innerHTML = this.result;
        document.getElementById("history_span").innerHTML = this.history;
    }
    press_result() {
        if (CONVERT == 1) {
            let array = document.getElementsByClassName("select_t");
            let first = (array[0].value);
            let second = (array[1].value);
            if (first == "centimeters") {
                if (second == "centimeters"){
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "kilometers"){
                    this.result = Number(this.result) / 100000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "meters"){
                    this.result = Number(this.result) / 100;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }

            }
            if (first == "kilometers") {
                if (second == "centimeters"){
                    this.result = Number(this.result) * 100000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "kilometers"){
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "meters"){
                    this.result = Number(this.result) * 1000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                
            }
            if (first == "meters") {
                if (second == "centimeters"){
                    this.result = Number(this.result) * 1000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "kilometers"){
                    this.result = Number(this.result) / 1000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "meters"){
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
            }
            


            if (first == "grams") {
                if (second == "grams"){
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "kilograms"){
                    this.result = Number(this.result) / 1000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "tonnes"){
                    this.result = Number(this.result) / 1000000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
            }
            if (first == "kilograms") {
                if (second == "grams"){
                    this.result = Number(this.result) * 1000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "kilograms"){
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "tonnes"){
                    this.result = Number(this.result) / 1000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
            }
            if (first == "tonnes") {
                if (second == "grams"){
                    this.result = Number(this.result) * 1000000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "kilograms"){
                    this.result = Number(this.result) * 1000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "tonnes"){
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
            }


            if (first == "square centimeters") {
                if (second == "square centimeters"){
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "square kilometers"){
                    this.result = Number(this.result) / 10000000000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "square meter"){
                    this.result = Number(this.result) / 10000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "hectares"){
                    this.result = Number(this.result) / 100000000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
            }
            if (first == "square kilometers") {
                if (second == "square centimeters"){
                    this.result = Number(this.result) / 10000000000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "square kilometers"){
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "square meter"){
                    this.result = Number(this.result) * 1000000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "hectares"){
                    
                    this.result = Number(this.result) * 100;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
            }
            if (first == "square meter") {
                if (second == "square centimeters"){
                    this.result = Number(this.result) / 10000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "square kilometers"){
                    this.result = Number(this.result) / 1000000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "square meter"){
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "hectares"){
                    this.result = Number(this.result) / 10000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
            }
            if (first == "hectares") {
                if (second == "square centimeters"){
                    this.result = Number(this.result) * 100000000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "square kilometers"){
                    this.result = Number(this.result) * 100;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "square meter"){
                    this.result = Number(this.result) * 10000;
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
                if (second == "hectares"){
                    document.getElementById("result_span").innerHTML = this.result;
                    document.getElementById("history_span").innerHTML = this.result;
                    return;
                }
            }


        }
        else {
            if (mode == 0) {
                document.getElementById("result_span").innerHTML = this.result;
                if (!Number.isInteger(this.result)) {
                    this.result = Number(this.result).toFixed(5);
                    console.log(this.result);
                    document.getElementById("result_span").innerHTML = this.result;
                }
                document.getElementById("result_span").innerHTML = this.result;
                if (this.result > 1000000000 || this.result < -1000000000) {
                    this.result = Number(this.result).toExponential(6);
                    document.getElementById("result_span").innerHTML = this.result;
                }
            }
            else if (mode == 1){
                this.result = to_binary(Number(eval(this.eval_str)));
                document.getElementById("result_span").innerHTML = this.result;
            }
            else if (mode == 2) {
                this.eval_str = this.eval_str.slice(0, this.eval_str.length - this.active_num.length);
                this.eval_str += parseInt(this.active_num, 16);
                this.result = Number(eval(this.eval_str)).toString(16);
                document.getElementById("result_span").innerHTML = this.result;
            }
        }

            
    }
    press_percent() {
        this.eval_str = this.eval_str.slice(0, this.eval_str.length - this.active_num.length);
        this.eval_str += String(Number(this.active_num/100));
        this.result = eval(this.eval_str);
        document.getElementById("result_span").innerHTML = this.result;
        this.active_num = null;
        console.log(this.eval_str);
    }
    press_sign() {
        this.eval_str = this.eval_str.slice(0, this.eval_str.length - this.active_num.length);
        if (this.eval_str[this.eval_str.length-1] == "-") {
            this.eval_str = this.eval_str.slice(0,this.eval_str.length - 1);
            this.eval_str+= "+";
            this.eval_str += this.active_num;
            this.result = eval(this.eval_str);
            document.getElementById("result_span").innerHTML = this.result;
            this.history = this.history.slice(0,this.history.length - 1 - this.active_num.length);
            this.history+= "+";
            this.history += this.active_num;
            document.getElementById("history_span").innerHTML = this.history;
        } 
        else if (this.eval_str[this.eval_str.length-1] == "+") {
            this.eval_str = this.eval_str.slice(0,this.eval_str.length - 1);
            this.eval_str+= "-";
            this.eval_str += this.active_num;
            this.result = eval(this.eval_str);
            document.getElementById("result_span").innerHTML = this.result;
            this.history = this.history.slice(0,this.history.length - 1 - this.active_num.length);
            this.history+= "-";
            this.history += this.active_num;
            document.getElementById("history_span").innerHTML = this.history;
        }
        else {
            this.eval_str = this.eval_str.slice(0,this.eval_str.length);
            this.eval_str+= "-";
            this.eval_str += this.active_num;
            this.result = eval(this.eval_str);
            document.getElementById("result_span").innerHTML = this.result;
            this.history = this.history.slice(0,this.history.length -this.active_num.length);
            this.history+= "-";
            this.history += this.active_num;
            document.getElementById("history_span").innerHTML = this.history;
        }
    }
    press_factorial() {
        this.history+="!";
        this.eval_str = this.eval_str.slice(0,this.eval_str.length - this.active_num.length)
        this.eval_str += factorial(this.active_num);
        this.active_num = null;
        this.result = eval(this.eval_str);
        console.log("eee " + this.result)
        document.getElementById("result_span").innerHTML = this.result;
        document.getElementById("history_span").innerHTML = this.history;
    }
    press_pow() {
        this.pow = this.active_num;
        this.active_num = "";
    }
    check_pow() {
        console.log("ACTIVE:  " + this.active_num)
            this.eval_str = this.eval_str.slice(0,this.eval_str.length-this.active_num.length-this.pow.length);
            console.log("EVAL : " + this.eval_str);
            this.eval_str += String(Math.pow(this.pow,this.active_num));
            console.log("EVAL : " + this.eval_str);
            this.result = eval(this.eval_str);
            document.getElementById("result_span").innerHTML = this.result;
            this.pow = null;
    }
    press_sqrt() {
        console.log("gg");
        this.eval_str = this.eval_str.slice(0,this.eval_str.length - this.active_num.length)
        this.eval_str += Math.sqrt(this.active_num);
        this.history = this.history.slice(0, this.history.length - this.active_num.length);
        this.history+="√";
        this.history+=this.active_num;
        this.active_num = null;
        this.result = eval(this.eval_str);
        document.getElementById("result_span").innerHTML = this.result;
        document.getElementById("history_span").innerHTML = this.history;
        
    }
    press_MR(){
        localStorage.setItem("NUM", this.result);
    }
    press_MC() {
        localStorage.clear();
    }

    press_Mplus() {
        let old_num = localStorage.getItem("NUM");
        this.result = Number(this.result) + Number(old_num);
        this.history = this.result;
        this.active_num = this.result;
        this.eval_str = this.result;
        document.getElementById("result_span").innerHTML = this.result;
        localStorage.setItem("NUM", this.result);

    }
    press_Mminus() {
        let old_num = localStorage.getItem("NUM");
        this.result = Number(this.result) - Number(old_num);
        this.history = this.result;
        this.active_num = this.result;

        document.getElementById("result_span").innerHTML = this.result;
        localStorage.setItem("NUM", this.result);
    }

    switch_mode(){

    mode++;
    if(mode == 3) {
        mode = 0;
    }

    if (mode == 1) {
            
        document.getElementsByClassName("Name")[0].innerHTML = "Calculator(binary)";
        for (let index = 0; index < keys.length; index++) {
            if (keys[index].value == "+" 
                || keys[index].value == "-"  
                || keys[index].value == "/"  
                || keys[index].value == "*" 
                || keys[index].value == "MODE"  
                || keys[index].value == "C" 
                || keys[index].value == "="
                || keys[index].value == "1"
                || keys[index].value == "0") {
                    continue;
                }
            keys[index].disabled = true;
            keys[index].classList.add("disabled");
        }
    } 
    else if ( mode == 2) {
        document.getElementsByClassName("Name")[0].innerHTML = "Calculator(HEX)";
        for (let index = 0; index < keys.length; index++) {
            if (!isNaN(keys[index].value)
            || keys[index].value == "M+"
            || keys[index].value == "MC"
            || keys[index].value == "MR"
            || keys[index].value == "√"
            || keys[index].value == "^"
            || keys[index].value == "X!"
            || keys[index].value == "+" 
            || keys[index].value == "-"  
            || keys[index].value == "/"  
            || keys[index].value == "*" 
            || keys[index].value == "MODE"  
            || keys[index].value == "C" 
            || keys[index].value == "="
            ) {
                    keys[index].disabled = false;
                    keys[index].classList.remove("disabled");
                    if (keys[index].value == "M+")
                        keys[index].innerHTML = "A";
                    if (keys[index].value == "MC")
                        keys[index].innerHTML = "B";
                    if (keys[index].value == "MR")
                        keys[index].innerHTML = "C";
                    if (keys[index].value == "√")
                        keys[index].innerHTML = "D";
                    if (keys[index].value == "^")
                        keys[index].innerHTML = "E";
                    if (keys[index].value == "X!")
                        keys[index].innerHTML = "F";
                    continue;
            }
            keys[index].disabled = true;
            keys[index].classList.add("disabled");

        }
    } 
    else if (mode == 0) {
        document.getElementsByClassName("Name")[0].innerHTML = "Calculator";
        for (let index = 0; index < keys.length; index++) {
            keys[index].disabled = false;
            keys[index].classList.remove("disabled");
            if (keys[index].value == "M+")
                keys[index].innerHTML = "M+";
            if (keys[index].value == "MC")
                keys[index].innerHTML = "MC";
            if (keys[index].value == "MR")
                keys[index].innerHTML = "MR";
            if (keys[index].value == "√")
                keys[index].innerHTML = "&#8730;x";
            if (keys[index].value == "^")
                keys[index].innerHTML = "x<sup>n</sub>";
            if (keys[index].value == "X!")
                keys[index].innerHTML = "x!";
        }
    }
    }
}


let calc = new calculator();
let keys = document.getElementsByTagName("button");
document.getElementById("list").hidden = true;
for (let index = 0; index < keys.length; index++) {
    keys[index].onclick = function name() {
        calc.press_key(keys[index].value);
    }
}
function factorial(num) {
    if (num == 0) {
        return 1;
    }
    for(var i = num-1; i >= 1; i--){
        num = num * i;
    }
    return num;     
}

function correct(str) {
    if (str.length >= 10){
        return str.slice(0, 10);
    }
}

function to_binary(dec) {
    return (dec >>> 0).toString(2);
  }

  function to_hex(str) {
    return parseInt(str.toString(16), 16)
  }

  function form_dec_to_hex(dec) {
    return '0x' + (dec+0x10000).toString(16).substr(-4).toUpperCase();
 }


 let list_opt = document.getElementsByClassName("opt");
 let lists = document.getElementsByClassName("select_t");


 for (let i = 0; i < list_opt.length; i++) {
    list_opt[i].disabled = true;
    if (list_opt[i].value == "centimeters" 
    || list_opt[i].value == "kilometers"
    || list_opt[i].value == "meters"
    ) {
        list_opt[i].disabled = false;
    }
}


    lists[0].onchange = function(){

        let val = lists[0].value;
        if (val == "centimeters" || val == "kilometers" || val == "meters") {
            for (let i = 0; i < list_opt.length; i++) {
                list_opt[i].disabled = true;
                if (list_opt[i].value == "centimeters" 
                || list_opt[i].value == "kilometers"
                || list_opt[i].value == "meters"
                ) {
                    list_opt[i].disabled = false;
                }
            }
        }
        if (val == "grams" || val == "kilograms" || val == "tonnes") {
            for (let i = 0; i < list_opt.length; i++) {
                list_opt[i].disabled = true;
                if (list_opt[i].value == "grams" 
                || list_opt[i].value == "kilograms"
                || list_opt[i].value == "tonnes"
                ) {
                    list_opt[i].disabled = false;
                }
            }
        }
        if (val == "square centimeters" || val == "square kilometers" || val == "square meter" || val == "hectares")  {
            for (let i = 0; i < list_opt.length; i++) {
                list_opt[i].disabled = true;
                if (list_opt[i].value == "square centimeters" 
                || list_opt[i].value == "square kilometers"
                || list_opt[i].value == "square meter"
                || list_opt[i].value == "hectares"
                ) {
                    list_opt[i].disabled = false;
                }
            }
        }
    }
