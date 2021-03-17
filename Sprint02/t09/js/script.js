function getFormattedDate(dateObject) {


    let day_m = dateObject.getDate();
    let mounth = dateObject.getMonth();
    let year = dateObject.getFullYear();
    let hours = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    let dat_n = dateObject.getDay();
    if (day_m < 10) {
        str = "0" + day_m + ".";
    }
    else {
        str = day_m + ".";
    }
    mounth++;
    if (mounth < 10) {
        str += ("0" + mounth + ".");
    }
    else {
        str += (mounth + ".");
    }
    str += year + " ";

    if (hours < 10) {
        str += ("0" + hours + ":");
    }
    else {
        str += (hours + ":");
    }

    if (minutes < 10) {
        str += ("0" + minutes + " ");
    }
    else {
        str += (minutes + " ");
    }

    switch (dat_n) {

        case 1:
            str += "Monday";
            break;
        case 2:
            str += "Tuesday";
            break;
        case 3:
            str += "Wednesday";
            break;
        case 4:
            str += "Thursday";
            break;
        case 5:
            str += "Friday";
            break;
        case 6:
            str += "Saturday";
            break;
        case 7:
            str += "Sunday";
            break;
    }
}

/*
const date0= new Date(1993, 11, 1);
const date1= new Date(1998, 0, -33);
const date2= new Date('42 03:24:00');

getFormattedDate(date0);
getFormattedDate(date1);
getFormattedDate(date2);
*/