placeholder.remove();
notification.remove();
var sort_mode = 0;

let sort_rulles_div = document.createElement("div");
sort_rulles_div.innerHTML = 'No sorted';

sort_rulles_div.id = 'sort_rulles';
document.body.appendChild(sort_rulles_div);

var table = document.createElement('table');
function load_tabble(array) {
    table.remove();
    table = document.createElement('table');
    table.classList.add('tabble');
    document.body.appendChild(table);
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML = "Name";
    td.id = 'Name';
    td.classList.add('head')

    td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML = "Strength";
    td.id = 'Strength';
    td.classList.add('head')

    td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML = "Age";
    td.id = 'Age';
    td.classList.add('head')


    for (let index = 0; index < 9; index++) {
       tr = document.createElement('tr');
       table.appendChild(tr);

        for (let i = 0; i < 3; i++) {
            td = document.createElement('td');
            td.innerHTML = array[index][i];
            tr.appendChild(td);
       }
    }

    Name.onclick =  function() {
        console.log("start");
        sort_by_name(array);
        console.log("end");
    };
    
    Strength.onclick = function() {
        console.log("start");
        sort_by_strength(array);
        console.log("end");
    };
    
    Age.onclick = function() {
        console.log("start");
        sort_by_age(array);
        console.log("end");
    };
}

function sort_by_age(array) {
    sort_rulles_div.innerHTML = 'Sorting by Age, order: ABC';
    for (let i = 0; i < 8; i++) {
        for (let z = 0; z < 8; z++) {
            if (sort_mode == 1) {
                if (array[z][2] < array[z+1][2]) {
                        let temp = array[z];
                        array[z] = array[z+1];
                        array[z+1] = temp;
                        sort_rulles_div.innerHTML = 'Sorting by Age, order: DESC';
                }
            } 
            else {
                if (array[z][2] > array[z+1][2]) {
                    let temp = array[z];
                    array[z] = array[z+1];
                    array[z+1] = temp;
                    sort_rulles_div.innerHTML = 'Sorting by Age, order: ABC';
                }
            }
        }
    }
    if (sort_mode == 1) {
        sort_mode = 0;
    }
    else {
        sort_mode = 1;
    }
    load_tabble(array);
    
}

function sort_by_strength(array) {
    sort_rulles_div.innerHTML = 'Sorting by Strength, order: ABC';
    for (let i = 0; i < 8; i++) {
        for (let z = 0; z < 8; z++) {
            if (sort_mode == 2) {
                if (array[z][1] < array[z+1][1]) {
                    let temp = array[z];
                    array[z] = array[z+1];
                    array[z+1] = temp;
                    sort_rulles_div.innerHTML = 'Sorting by Strength, order: DESC';
                }
            }
            else {
                if (array[z][1] > array[z+1][1]) {
                    let temp = array[z];
                    array[z] = array[z+1];
                    array[z+1] = temp;
                    sort_rulles_div.innerHTML = 'Sorting by Strength, order: ABC';
                }
            }
        }
    }
    if (sort_mode == 2) {
        sort_mode = 0;
    }
    else {
        sort_mode = 2;
    }
    load_tabble(array);
}

function sort_by_name(array) {
    sort_rulles_div.innerHTML = 'Sorting by Name, order: ABC';
    for (let i = 0; i < 8; i++) {
        for (let z = 0; z < 8; z++) {
            if (sort_mode == 3) {
                if (array[z][0] < array[z+1][0]) {
                    let temp = array[z];
                    array[z] = array[z+1];
                    array[z+1] = temp;
                    sort_rulles_div.innerHTML = 'Sorting by Name, order: DESC';
                }
            }
            else {
                if (array[z][0] > array[z+1][0]) {
                    let temp = array[z];
                    array[z] = array[z+1];
                    array[z+1] = temp;
                    sort_rulles_div.innerHTML = 'Sorting by Name, order: ABC';
                }
            }

        }
    }
    if (sort_mode == 3) {
        sort_mode = 0;
    }
    else {
        sort_mode = 3;
    }
    load_tabble(array);
}

var array = [ ['Black<br>Panther'  , 66,   53    ],
            ['Capitan<br>America'      , 79,   137   ],
            ['Capitan<br>Marvel'       , 97,   26    ],
            ['Hulk'                 , 80,   49    ],
            ['Iron<br>Man'             , 88,   48    ],
            ['Spider-<br>man'           , 78,   16    ],
            ['Thanos'               , 99,   1000  ],
            ['Thor'                 , 95,   1000  ],
            ['Yon-<br>Rogg'             , 73,   52    ]];

load_tabble(array);
console.log(array);





