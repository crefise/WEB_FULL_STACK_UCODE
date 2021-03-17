function print_sett(begin, end) {
    if (begin == undefined || end == undefined || begin.length ==0 || end.length==0) {
        begin = 1;
        end = 100;
    }
    for (let index = begin; index <= end; index++) {
        let str = new String(index);
        if (index % 2 == 0) {
            str += " is even";
        }


        if (index % 3 == 0) {
            if (str.length != String(index).length)
                str += ", a multiple of 3";
            else 
                str += " is a multiple of 3";
        }

        if (index % 10 == 0) {
            if (str.length != String(index).length)
                str += ", a multiple of 10";
            else 
                str += "is a multiple of 10";
        }
        if (str.length == String(index).length) {
            str += " -";
        } 
        console.log(str);
    }
}

let begin = prompt("GIVE ME RANGE BEGIN: ");
let end =  prompt("GIVE ME RANGE END: ");
print_sett(begin, end);