function sortEvenOdd(array) {
    for (let index_1 = 0; index_1 < array.length-1; index_1++) {
        for (let index_2 = 0; index_2 < array.length-1; index_2++) {
            if (array[index_2+1] % 2 ==0 && array[index_2] % 2 != 0) {
                let temp = array[index_2];
                array[index_2] = array[index_2+1];
                array[index_2+1] = temp;
            }
        }
    }


    let = temp_counter=0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 == 0) {
            temp_counter++;
        }
    }


    for (let index_1 = 0; index_1 < temp_counter-1; index_1++) {
        for (let index_2 = 0; index_2 < temp_counter-1; index_2++) {
            if (array[index_2] > array[index_2+1]) {
                let temp = array[index_2];
                array[index_2] = array[index_2+1];
                array[index_2+1] = temp;
            }
        }
    }
   

    for (let index_1 = temp_counter; index_1 < array.length; index_1++) {
        for (let index_2 = temp_counter; index_2 < array.length; index_2++) {
            if (array[index_2] > array[index_2+1]) {
                let temp = array[index_2];
                array[index_2] = array[index_2+1];
                array[index_2+1] = temp;
            }
        }
    }
    return array;
}
/*

const arr= [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
sortEvenOdd(arr);
console.log(arr); // (12) [2, 6, 8, 8, 10, 1, 1, 3, 5, 7, 11, 15]
*/