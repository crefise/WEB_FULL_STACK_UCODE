<?php
    class Card {
        public $name;
        public $attack;
        public $defence;
        public $cost;
        public $image;

        function __construct($name, $attack, $defence, $cost, $image)
        {
            $this->name = $name;
            $this->attack = $attack;
            $this->defence = $defence;
            $this->cost = $cost;
            $this->image = $image;
        }

        function show_card_checkbox() {
            return '
                <div class = "card">
                    <label><input type="checkbox" name="'.$this->name.'"><span><img src="' . $this->image . '" class = "card_img" for="'. $this->name .'"></span></label>
                </div>';
        }
        function show_card_battle() {
            return '
                <div class = "card" name="'.$this->name.'" attack="'.$this->attack.'" defense="'.$this->defence.'" cost="'.$this->cost.'">
                    <button class = "card_button"><img src="' . $this->image . '" class = "card_img"></button>
                </div>';
        }
    }

    $cards = [];
    array_push($cards, new Card("capitan_america", 4, 4, 4, "/css/images/card/capitan_america.png"));
    array_push($cards, new Card("chitauri", 2, 1, 1, "/css/images/card/chitauri.png"));
    array_push($cards, new Card("hela", 5, 5, 5, "/css/images/card/hela.png"));
    array_push($cards, new Card("iron_man", 5, 6, 6, "/css/images/card/iron_man.png"));
    array_push($cards, new Card("ivan_vanko", 2, 2, 2, "/css/images/card/ivan_vanko.png"));
    array_push($cards, new Card("nick_fury", 2, 2, 2, "/css/images/card/nick_fury.png"));
    array_push($cards, new Card("peggy_carter", 1, 1, 1, "/css/images/card/peggy_carter.png"));
    array_push($cards, new Card("red_scull", 3, 2, 3, "/css/images/card/red_scull.png"));
    array_push($cards, new Card("spider_man", 3, 3, 3, "/css/images/card/spider_man.png"));
    array_push($cards, new Card("thanos", 6, 5, 6, "/css/images/card/thanos.png"));
    array_push($cards, new Card("altron", 4, 2, 3, "/css/images/card/altron.png"));
    array_push($cards, new Card("black_widow", 3, 1, 2, "/css/images/card/black_widow.png"));
    array_push($cards, new Card("doctor_strange", 5, 4, 5, "/css/images/card/doctor_strange.png"));
    array_push($cards, new Card("ego", 3, 4, 4, "/css/images/card/ego.png"));
    array_push($cards, new Card("hulk", 2, 4, 3, "/css/images/card/hulk.png"));
    array_push($cards, new Card("loki", 4, 3, 4, "/css/images/card/loki.png"));
    array_push($cards, new Card("ronan_the_accuser", 2, 4, 3, "/css/images/card/ronan_the_accuser.png"));
    array_push($cards, new Card("scarlet_witch", 3, 4, 4, "/css/images/card/scarlet_witch.png"));
    array_push($cards, new Card("thor", 5, 4, 5, "/css/images/card/thor.png"));
    array_push($cards, new Card("zemo", 2, 1, 2, "/css/images/card/zemo.png"));

?>