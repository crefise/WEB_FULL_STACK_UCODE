let ph_t = 0;
let wc_t = 0;
let wr_t = 0;
function PhoneNumber() {
   
    


    let str = word_input.value;
    if (str.length <= 0) {
        return;
    }
    
    ph_t++;
    button_1.value = `To phone number [${ph_t}]`
    console.log(str);
    if (str.length != 10 || (!(/^[0-9]+$/.test(str)))) {
        output_box.innerHTML = "invalid phone number";
    } 
    else {
        let result = str.slice(0,3);
        result += ("-" + str.slice(3,6));
        result += ("-" + str.slice(6));
        output_box.innerHTML = result;
    }

    
}

function WordCount() {


    let word = word_input.value;
    let text = text_area.value;
    console.log(text)
    if (word.length <= 0 || text.length <= 0) {
        return;
    }
    wc_t++;
    button_2.value = `Word count [${wc_t}]`
    var result = 0;
    let array = text.split("\n");
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
        if (array.length > 0) {
            let array_1 = array[index].split(" ");
            for (let i = 0; i < array_1.length; i++) {
                if (array_1[i] == word) {
                    result ++;
                }
            }
            array_1 = null;
        }
    }
    output_box.innerHTML = "Word count: " + result;

    
}

function WordReplace() {


    let word = word_input.value;
    let text = text_area.value;
    console.log(text)
    if (word.length <= 0 || text.length <= 0) {
        return;
    }
    wr_t++;
    button_3.value = `Word replace [${wr_t}]`
    let result = ""
    let array = text.split("\n");
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
        if (array.length > 0) {
            let array_1 = array[index].split(" ");
            for (let i = 0; i < array_1.length; i++) {
                if (array_1[i].length > 0) {
                    result += (word + " ");
                }
            }
            array_1 = null;
        }
    }
    output_box.innerHTML = result;

    

}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : 0;
  }


document.cookie = "user=John";
console.log(document.cookie);

ph_t = Number(getCookie(String("ph_t")));
wc_t = Number(getCookie(String("wc_t")));
wr_t = Number(getCookie(String("wr_t")));



button_1.value = `To phone number [${ph_t}]`
button_2.value = `Word count [${wc_t}]`
button_3.value = `Word replace [${wr_t}]`

setInterval ( () => {
    console.log("cookie aads");
    document.cookie = "ph_t="+encodeURIComponent(ph_t);
    document.cookie = "wc_t="+encodeURIComponent(wc_t);
    document.cookie = "wr_t="+encodeURIComponent(wr_t);
}, 60000);