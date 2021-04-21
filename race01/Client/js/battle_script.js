let menu = document.getElementsByClassName("menu");
menu[0].hidden = true;
let counter_time = 10;
button_player_skip_html.disabled = true;
button_enemy_skip_html.disabled = true;
document.getElementById("status_box_html").hidden = true;
document.getElementById("win_box_html").hidden = true;
document.getElementById("math_info_html_alone").style.display = "none";
button_player_skip_html.hidden = true;
button_enemy_skip_html.hidden = true;

class Player {
    constructor(name) {
        this.hp = 20;
            document.getElementById("player_hp").innerHTML = this.hp;
            document.getElementById("enemy_hp").innerHTML = this.hp;
        this.name = name;
        this.souls = 10;
        player_souls.innerHTML = this.souls;
        enemy_souls.innerHTML = this.souls;
        if (name == "player") {
            this.cards = document.getElementsByClassName("card");
        }
        else {
            this.cards = document.getElementsByClassName("card_enemy");
        }
        let card = this.cards;
        for (let index = 0; index < this.cards.length; index++) {
            this.active_card = 0;
            card[index].onclick = () => {
                if (card[index].disabled != true) {
                    // check correct soul count
                    let check_soul;
                    if (name == "player") {
                        check_soul = player_souls.innerHTML;
                    }
                    else {
                        check_soul = enemy_souls.innerHTML;
                    }
                    console.log("check_soul: " + check_soul);
                    if (check_soul >= parseInt(card[index].getAttribute("cost"))) {
                        if (name == "player") 
                            card[index].classList.add("fight_card_div");
                        else 
                            card[index].classList.add("fight_card_enemy");
                        this.active_card = index;
                        for (let i = 0; i < card.length; i++) {
                            card[i].disabled = true;
                        }
                    }
                }
            }   
            card[index].disabled = true;
        }
    }
    
    
    defense () {
        for (let index = 0; index < this.cards.length; index++) {
            (this.cards[index]).disabled = false;
        }
    }

    attack () {
        for (let index = 0; index < this.cards.length; index++) {
            (this.cards[index]).disabled = false;
        }
    }
}

class Battle {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.interval_temp = 0;
        counter_time = 10;
    }

    start() {

    }
    attack_first() {
        counter_time = 10;
        time_counter_html.innerHTML = counter_time;
        console.log("first start attack!")
        this.player1.attack();

        this.interval_temp = setInterval(()=>{
            time_counter_html.innerHTML = counter_time;
            counter_time--;
           // console.log("Time left: " + counter_time);
            if (counter_time <= 0) {
                console.log("end time!")
                clearInterval( this.interval_temp);
                for (let index = 0; index < this.player1.cards.length; index++) {
                    this.player1.cards[index].disabled = true;
                }
                if (this.player2.name == "bot") {
                    this.attack_second_bot();
                }
                else {
                    this.attack_second();
                }
                counter_time = 10;
                return;
            }


           // console.log('waiting attack first...');
            if (this.player1.cards[0].disabled == true) {
                let cost_value =  this.player1.souls - parseInt(this.player1.cards[this.player1.active_card].getAttribute("cost"));
                this.player1.souls = cost_value;
                if (cost_value < 0) {
                    player_souls.innerHTML = 0;
                }
                else {
                    player_souls.innerHTML = cost_value;
                }

                console.log("first attacked!");
                clearInterval( this.interval_temp);
                if (this.player2.name == "bot") {
                    this.defense_second_bot();
                }
                else {
                    this.defense_second();
                }

                counter_time = 10;
            }

        }, 1000);
    }
    attack_second() {
        counter_time = 10;
        time_counter_html.innerHTML = counter_time;
        console.log("second start attack!")
        this.player2.attack();

        this.interval_temp = setInterval(()=>{
            time_counter_html.innerHTML = counter_time;
       //     console.log('waiting attack second...');

            counter_time--;
         //   console.log("Time left: " + counter_time);
            if (counter_time <= 0 ) {
                console.log("end time!")
                for (let index = 0; index < this.player2.cards.length; index++) {
                    this.player2.cards[index].disabled = true;
                }
                clearInterval( this.interval_temp);
                this.attack_first();
                return;
            }
            if (this.player2.cards[0].disabled == true) {

                if (this.player2.cards[0].disabled == true) {
                    let cost_value =  this.player2.souls - parseInt(this.player2.cards[this.player2.active_card].getAttribute("cost"));
                    this.player2.souls = cost_value;
                    if (cost_value < 0) {
                        enemy_souls.innerHTML = 0;
                    }
                    else {
                        enemy_souls.innerHTML = cost_value;
                    }
                }


                console.log("second attacked!");
                clearInterval( this.interval_temp);
                this.defense_first();
            }

        }, 1000);
    }

    defense_first(){
        counter_time = 10;
        time_counter_html.innerHTML = counter_time;

        this.player1.defense();
        this.interval_temp = setInterval(()=>{
            if (counter_time <= 0) {
                console.log("end time!")
                clearInterval( this.interval_temp);
                this.calculate_difference(this.player1, this.player2, 1);
                this.attack_first();
                return;
            }




            time_counter_html.innerHTML = counter_time;
            counter_time--;

            console.log('waiting defense rirst...');
            if (this.player1.cards[0].disabled == true) {
                console.log("first defensed!");
                clearInterval( this.interval_temp);
                this.calculate_difference(this.player1, this.player2);
                this.attack_first();
           
            }

        }, 1000);
    }
    defense_second(){
        counter_time = 10;
        time_counter_html.innerHTML = counter_time;

        console.log("second start defense!");
        this.player2.defense();

        this.interval_temp = setInterval(()=>{
            if (counter_time <= 0) {
                console.log("end time!")
                clearInterval( this.interval_temp);
                this.calculate_difference(this.player2, this.player1, 1);
                this.attack_second();
                return;
            }


            time_counter_html.innerHTML = counter_time;
            counter_time--;
            console.log('waiting defense second...');
            if (this.player2.cards[0].disabled == true) {
                console.log("second defensed!");
                clearInterval( this.interval_temp);
                this.calculate_difference(this.player2, this.player1);
                this.attack_second();
            
            }
        }, 1000);
    }


    attack_second_bot() {
        for (let index = 0; index < this.player2.cards.length; index++) {
            (this.player2.cards[index]).disabled = true;
        }

            setTimeout( ()=> {
                console.log("Bot start attack!");
            
            

            //this.player2.cards[1].disabled = false;
            //this.player2.cards[1].classList.add("fight_card_enemy");

            let enemy_s = document.getElementsByClassName("card_enemy");

            for (let index = 4; index >= 0; index--) {
                if (parseInt((enemy_s[index]).getAttribute("cost")) <= this.player2.souls) {
                    this.player2.cards[index].disabled = false;
                    this.player2.cards[index].classList.add("fight_card_enemy");
                    this.player2.active_card = index;
                    break;
                }
            }

            let cost_value =  this.player2.souls - parseInt(this.player2.cards[this.player2.active_card].getAttribute("cost"));
            this.player2.souls = cost_value;
            if (cost_value < 0) {
                enemy_souls.innerHTML = 0;
            }
            else {
                enemy_souls.innerHTML = cost_value;
            }

            setTimeout(()=>{
                this.defense_first();
            }, 1000);
        }, 1000);
        
    }
    defense_second_bot() {
        for (let index = 0; index < this.player2.cards.length; index++) {
            (this.player2.cards[index]).disabled = true;
        }

        setTimeout(()=>{
            console.log("second start bot!");
            let enemy_s = document.getElementsByClassName("card_enemy");
            for (let index = 4; index >= 0; index--) {
                if (parseInt((enemy_s[index]).getAttribute("cost")) <= this.player2.souls) {
                    this.player2.cards[index].disabled = false;
                    this.player2.cards[index].classList.add("fight_card_enemy");
                    this.player2.active_card = index;
                    break;
                }
            }
    
            setTimeout(()=> {
                this.calculate_difference(this.player2, this.player1);
                setTimeout(()=> {
                    this.attack_second_bot();
                }, 1000);
                
            }, 1000);
        }, 1000);
    }
    calculate_difference(defense_player, attack_player, mode = 0) {

        let change_hp;
        console.log("defense player name:" + defense_player.name);
        if (defense_player.name == "player")
            change_hp = document.getElementById("player_hp");
        else 
            change_hp = document.getElementById("enemy_hp");


        console.log("defense player active deff card: " + defense_player.active_card);
        console.log("attack player active deff card: " + attack_player.active_card);

        let attack_value =  parseInt(attack_player.cards[attack_player.active_card].getAttribute("attack"));
        let defense_value = parseInt(defense_player.cards[defense_player.active_card].getAttribute("defense"));
        let hp_result;
        if (mode == 1) {
            hp_result = attack_value;
        }
        else {
            hp_result = attack_value - defense_value;
        }
        
        console.log("Attack value: " + attack_value);
        console.log("Defense value: " + defense_value);
        console.log("hp result: " + hp_result);



        if (hp_result > 0) {
            let new_hp = parseInt(change_hp.innerHTML) - hp_result;
            change_hp.innerHTML = new_hp;
            defense_player.hp = new_hp;
            console.log("Now hp = " + new_hp);
        }
        else {
            console.log("hp not change");
        }

        if (attack_player.name == "player") {
            attack_player.cards[attack_player.active_card].classList.remove("fight_card_div");
            defense_player.cards[defense_player.active_card].classList.remove("fight_card_enemy");
        }
        else {
            attack_player.cards[attack_player.active_card].classList.remove("fight_card_enemy");
            defense_player.cards[defense_player.active_card].classList.remove("fight_card_div");
        }
        this.check_win();
        this.add_souls();
    }

    add_souls() {
        this.player1.souls += 1;
        this.player2.souls += 1;

        player_souls.innerHTML = this.player1.souls;
        enemy_souls.innerHTML = this.player2.souls;
    }

    stop() {
        console.log("Stropping interval!");
        clearInterval(this.interval_temp);
    }

    check_win() {
        if (this.player1.hp <= 0) {
            this.stop();
            player_name_html.innerHTML = this.player2.name;
            document.getElementById("win_box_html").hidden = false;

        }
        if (this.player2.hp <= 0) {
            this.stop();
            player_name_html.innerHTML = this.player1.name;
            document.getElementById("win_box_html").hidden = false;

        }
    }
}

resume_button_html.onclick = () => {
    console.log("test");
    let menu = document.getElementsByClassName("menu");
    menu[0].hidden = true;
}
menu_button_html.onclick = () => {
    console.log("test");
    let menu = document.getElementsByClassName("menu");
    menu[0].hidden = false;
}

win_retry_button.onclick = () => {
    location.href = "/fight";
}

win_menu_button.onclick = () => {
    location.href = "/main";
}

mach_info_html.onclick = () => {
    let menu = document.getElementsByClassName("menu");
    menu[0].hidden = true;
    document.getElementById("math_info_html_alone").style.display = "flex";
}

close_html.onclick = () => {
    document.getElementById("math_info_html_alone").style.display = "none";
}

let test_battle = new Battle(new Player("player"), new Player("player2"));
test_battle.attack_first();

play_bot_button_html.onclick = () => {
    test_battle.stop();
    document.getElementById("status_box_html").hidden = false;
    let menu = document.getElementsByClassName("menu");
    menu[0].hidden = true;
    setTimeout( () =>{
        document.getElementById("status_box_html").hidden = true;
        let bot_battle = new Battle(new Player("player"), new Player("bot"));
        bot_battle.attack_first();
    }, 2000);
}