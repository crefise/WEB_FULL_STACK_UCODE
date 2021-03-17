
setTimeout(() => {
    let tem = document.getElementsByClassName('img_div');
    for (let index = 0; index < tem.length; index++) {
        tem[index].style.transition = '2s ease';
    }
}, 100);


var interval;
var active_img = 0;
function start_using () {
    right.onclick = function() {
        slide_right(img_array);
    }
    left.onclick = function() {
        slide_left(img_array);
    }
}

function slide_l (old_object,object) {
    old_object.classList.remove('active_img_div');
    object.classList.remove('no-transition');
    object.style.left = "";
    object.classList.add('active_img_div');

}

function slide_r (old_object,object = 0) {
    console.log("Tt");
    old_object.classList.add("no-transition");
    old_object.style.left = "";
    setTimeout(temp, 100);
    function temp() {
        console.log("t");
        old_object.classList.remove("no-transition");
    }
}

function slide_left(img_array) {
    clearInterval(interval);
    right.onclick = 0;
    left.onclick = 0;

    let will_showed = active_img - 1;
    if (will_showed == -1) {
        will_showed = 3;
    }
    console.log(will_showed);
    img_array[will_showed].classList.add("no-transition");
    img_array[will_showed].style.left = "-100%";
    setTimeout(slide_l,100,img_array[active_img], img_array[will_showed]);
    setTimeout(start_using,2000);
    active_img = will_showed;



    interval = setInterval(() => {
        slide_right(img_array);
    }, 3000);
}

function slide_right(img_array) {
    clearInterval(interval);
    right.onclick = 0;
    left.onclick = 0;

    let will_showed = active_img + 1;
    if (will_showed == 4) {
        will_showed = 0;
    }
    console.log(will_showed);


    img_array[active_img].classList.remove('active_img_div');
    img_array[active_img].style.left = "-100%";
    img_array[will_showed].classList.add('active_img_div');



    setTimeout(slide_r,2000,img_array[active_img], img_array[will_showed]);
    setTimeout(start_using,2000);
    active_img = will_showed;

    interval = setInterval(() => {
        slide_right(img_array);
    }, 3000);
}

function set_activation(img_array, number = 0) {
    img_array[number].classList.add('active_img_div');
}

img_array = document.getElementsByClassName('img_div');
set_activation(img_array);


right.onclick = function() {
    slide_right(img_array);
}


left.onclick = function() {
    slide_left(img_array);
}

interval = setInterval(() => {
    slide_right(img_array);
}, 3000);