function temp_finction(obj) {
    let test_double = obj.world.split(' ');
    obj.world = '';
    for (let index = 0; index < test_double.length; index++) {
        test_double[index] = test_double[index].trim();
        if (test_double[index].length == 0){
            continue;
        }
        obj.world+=(test_double[index] + ' ');
    }
    for (let i = 0; i < test_double.length; i++) {
        for (let z = 0; z < test_double.length; z++) {
            if (i == z) {
                continue;
            }
            if (test_double[i] == test_double[z]) {
                removeWords(obj, test_double[z]);
                obj.world = obj.world.trim();
                return;
            }
        }
    }
}

function addWords(obj, wrds) {
    wrds = wrds.trim();
    let temp = wrds.split(' ');

    for (let i = 0; i < temp.length; i++) {
        temp[i] = temp[i].trim();
        let index = obj.world.indexOf(temp[i]);
        if ( index == -1) {
            obj.world +=(" " + temp[i]);
        } 
    }
   
    let test_double = obj.world.split(' ');
    for (let index = 0; index < test_double.length; index++) {
        temp_finction(obj);
    }

    obj.world = obj.world.trim();

}

function removeWords(obj, wrds) {
    let temp_wrds = wrds.split(' ');
    for (let p = 0; p < temp_wrds.length; p++) {
        wrds = temp_wrds[p].trim();
        let index = obj.world.indexOf(wrds);
        if (index != -1) {
            let new_str;
            if (index == 0) {
                new_str = obj.world.slice(0, index);
                new_str += (obj.world.slice(index+wrds.length));
            }
            else {
                new_str = obj.world.slice(0, index-1);
                new_str += (obj.world.slice(index+wrds.length));
            }
    
            obj.world = new_str;
        }
    }
    obj.world = obj.world.trim();
}

function changeWords(obj, oldWrds, newWrds) {
    oldWrds = oldWrds.trim();
    newWrds = newWrds.trim();
    let ned = oldWrds.split(" ");

    for (let k = 0; k < ned.length; k++) {
        oldWrds = ned[k];
        let index = obj.world.indexOf(oldWrds)
    if (index != -1) {
        let new_str;
        if (index == 0) {
            new_str = obj.world.slice(0, index);
            new_str+= newWrds;
            new_str += (obj.world.slice(oldWrds.length));
            obj.world = new_str;
        }
        else {
            new_str = obj.world.slice(0, index);
            new_str+= newWrds;
            new_str += (obj.world.slice(index+1+oldWrds.length));
            obj.world = new_str;
        }
    }
    


    }

    let test_double = obj.world.split(' ');
    for (let index = 0; index < test_double.length; index++) {
        temp_finction(obj);
    }
    obj.world = obj.world.trim();
}

/*
const obj = {
    world: 'newspapers newspapers  books magazines'
}

    console.log(obj);
    // {words: "newspapers newspapers  books magazines"}
    addWords(obj, 'radio newspapers   ');
    console.log(obj); 
    // {words: "newspapers books magazines radio"}
    removeWords(obj, 'newspapers   radio');console.log(obj);
    // {words: "books magazines"}
    changeWords(obj, 'books radio  magazines', 'tv internet');
    console.log(obj); 
    // {words: "tv internet"}

    */