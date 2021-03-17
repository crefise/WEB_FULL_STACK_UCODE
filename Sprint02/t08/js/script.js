function checkBrackets(str) {
    array = new String(str);
    if (typeof(str) != "string" || str.length == 0 || str == NaN || (str.indexOf("(") == -1 && str.indexOf(")") == -1) || str == NaN) {
        return -1;
    }
    let finall_result = 0;
    let active_brackts = 0;

    for (let index = 0; index < array.length; index++) {
        if (array[index] != "(" && array[index] != ")") {
            continue;
        }
        if (active_brackts == 0 && array[index] == ")") {
            finall_result += 1;
            continue;
        }
        if (array[index] == "(") {
            active_brackts +=1;
            continue;
        }
        if (active_brackts > 0 && array[index] == ")") {
            active_brackts -=1;
            continue;
        }
    }
    finall_result += active_brackts;
    return finall_result;
}



