/* -------------------------- WeakSet --------------------------  */
let guestList = new WeakSet();

let man1 = ["man_1"];
let man2 = ["man_2"];
let man3 = ["man_3"];
let man4 = ["man_4"];
let man5 = ["man_5"];

guestList.add(man1);
guestList.add(man2);
guestList.add(man3);

console.log(guestList.has(man1));

guestList.delete(man1);

console.log(guestList.has(man1));


/* -------------------------- WeakSet --------------------------  */




/* -------------------------- WeakMap --------------------------  */
let menu = new WeakMap();

let borsh = { name: "borch"};
let sup = { name: "sup"};
let pasta = { name: "pasta"};
let makaroni = { name: "makaroni"};
let super_rulet = { name: "super_rulet"};

menu.set(borsh, "30$");
menu.set(sup, "120$");
menu.set(pasta, "130$");
menu.set(makaroni, "150$");
menu.set(super_rulet, "170$");


console.log(menu.get(borsh));

/* -------------------------- WeakMap --------------------------  */





/* -------------------------- MAP --------------------------  */
let bankVault = new Map();

bankVault.set(1, "110$");
bankVault.set(2, "120$");
bankVault.set(3, "130$");
bankVault.set(4, "140$");
bankVault.set(5, "150$");

bankVault.forEach((value, valueAgain, set) => {
    console.log(value);
});

bankVault.delete(3);

bankVault.forEach((value, valueAgain, set) => {
    console.log(value);
});

console.log(bankVault.size);
/* -------------------------- MAP --------------------------  */




/* -------------------------- SET --------------------------  */
let coinCollection = new Set();

coinCollection.add("1992 year");
coinCollection.add("1232 year");
coinCollection.add("2992 year");
coinCollection.add("1292 year");
coinCollection.add("1196 year");

coinCollection.forEach((value, valueAgain, set) => {
    console.log(value);
});

coinCollection.clear();

coinCollection.forEach((value, valueAgain, set) => {
    console.log(value);
});
/* -------------------------- SET --------------------------  */

