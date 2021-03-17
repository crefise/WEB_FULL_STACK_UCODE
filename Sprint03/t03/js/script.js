

class Timer {
    constructor(title, delay, stopCount, mode) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount + 4;
        this.mode = mode;
    }

    start() {
        let temp_cyrcle = 0;

        
        var timerId = setInterval( () => {
            if (this.mode == -2) {
                hum.calories = 0;
                status_info.innerHTML = "PERDOLE";
                calories.innerHTML = "WANT EAT";
                this.stop(timerId);
                return;
            }
            if (this.mode == -1) {
                if (hum.calories > 0)
                    hum.lost_callories();
                if (hum.calories == 0) {
                    status_info.innerHTML = "I WONT EAT. I HUNGRYY!"
                }
                return;
            }
            hmara_div.hidden = false;
            if (this.mode < 3) {
                if (this.mode == 1 && this.stopCount != 4) {
                    if (temp_cyrcle > this.stopCount - 4) {
                        status_info.innerHTML = 'I am awake now!';
                    } 
                    else {
                        status_info.innerHTML = 'I am sleeping!';
                    }
                } 
                else {
                    if (temp_cyrcle >= this.stopCount - 4) {
                        if (this.stopCount == 4) {
                            status_info.innerHTML = "I'm not hungry!";
                        }
                        else {
                            if (hum.calories < 500)
                                status_info.innerHTML = "I'm still hungry";
                        }
                    } 
                    else {
                        status_info.innerHTML = 'Nyam Nyam Nyam...';
                    }
                } 
        }
        else {
            console.log("Perdole")
            if (this.mode == 3) {
                status_info.innerHTML = 'I am flying....';
            }
            else {
                if (temp_cyrcle >= 0) {
                    status_info.innerHTML = 'Khhhh-chh...';
                if (temp_cyrcle > 3)
                    status_info.innerHTML = 'Bang-g-g-g...';
                if (temp_cyrcle > 6)  
                    status_info.innerHTML = 'Roshan is defeated!';  
                     
                }
            }
        }
            temp_cyrcle++;
            if ( temp_cyrcle >= this.stopCount)
            this.stop(timerId);
        }, this.delay);
    }


    stop(temp) {
        clearInterval(temp);
        status_info.innerHTML = "";
        hmara_div.hidden = true;
        eat_key.disabled = false;
        sleep_key.disabled = false;
    }

}

function runTimer(id, delay, counter, mode){
    let temp = new Timer(id, delay, counter, mode);
    temp.start();
}



class human {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.calories = Number(200);
        this.img_src = "assets/images/human.png";


        name_actor.innerHTML = this.name;
        gender_actor.innerHTML = this.gender;
        old_actor.innerHTML = this.age;

        hmara_div.hidden = true; //Прячем облачко мылси
        human_image_img.src = this.img_src;
        
        calories.innerHTML = (this.calories);

        runTimer("dd", 60000, 100000, -1);

    }

    feed() {
        this.calories+=200;
        calories.innerHTML = (this.calories);
    }
    lost_callories() {
        this.calories-=100;
        calories.innerHTML = (this.calories);
    }
    function_one() {
        console.log("Perdole3");
        if (hum.calories > 500) {
            eat_key.disabled = true;
            sleep_key.disabled = true;
            runTimer("Bleep", 1000, 0, 2);
        }
        else {

            eat_key.disabled = true;
            sleep_key.disabled = true;
            runTimer("Bleep", 1000, 5, 2);
            hum.feed();
        }
    }
    function_two() {
        let temp = number_button.value;
        console.log(temp);
        runTimer("Beep2", 1000, Number(temp), 1);
        eat_key.disabled = true;
        sleep_key.disabled = true;
    }
}   

class superhero extends human {
    constructor(name, age, gender,calories){
        super(name,age,gender, calories);
        this.uppdate_info();
        this.function_one;
        this.function_two;
        this.calories = calories;
    }

    uppdate_info () {
        eat_key.innerHTML = "FLY";
        sleep_key.innerHTML = "FIGNT";
        this.img_src = "assets/images/pudge.jpg";
        human_image_img.src = this.img_src;
        document.body.style.background = "linear-gradient(to left,rgb(65, 16, 16), rgb(117, 19, 19))";
        calories.innerHTML = hum.calories;
    }
    function_one() {
            console.log("Perdole2");
            eat_key.disabled = true;
            sleep_key.disabled = true;
            runTimer("Flying", 1000, 5, 3);

    }
    function_two() {
        runTimer("Fight", 1000, 8, 4);
        eat_key.disabled = true;
        sleep_key.disabled = true;
    }

}

let name_1 = prompt("First and second name?");
let age = prompt("Man age?");
let gender = prompt("Man gender?");

hum = new human(name_1,age,gender);


eat_key.onclick = hum.function_one;
sleep_key.onclick = hum.function_two;


switch_actor.onclick = function() {
    if (hum.calories >= 500) {
    hum = new superhero(hum.name,hum.age,hum.gender, hum.calories);
    eat_key.onclick = hum.function_one;
    sleep_key.onclick = hum.function_two;
    number_button.hidden = true;
    properties_label_id.hidden = true;
    }
}



runTimer("dd",1000, 1, -2);