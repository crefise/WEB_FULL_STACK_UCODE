<?php

/*include "./Avenger.php";*/

/*
class Avenger {
    public $name;
    public $alias;
    public $gender;
    public $age;
    public $power;
    public $hp;

    function __construct($name, $alias, $gender, $age, $power, $hp)
    {
        $this->hp = $hp;
        $this->name = $name;
        $this->alias = $alias;
        $this->gender = $gender;
        $this->age = $age;
        $this->power = $power;

    }

    function __toString()
    {
        return "name: " . $this->name . "\n" . "gender: " . $this->gender ."\n" . "age: " . $this->age . "\n";
    }
    function __invoke()
    {
        $res = "";
        $res = $res . $this->alias . "\n";
        foreach ($this->power as $t) $res = ($res . $t . "\n");
        echo $res . "\n";
    }

}
*/

class  Team {
    public $id;
    public $avengers;

    function __construct($id, $avengers) {
        $this->id = $id;
        $this->avengers = $avengers;
    }


    function battle($damage) : void {

        

        for ($i=0; $i < count($this->avengers); $i++) { 
                $data = $this->avengers[$i];
                $data->hp -= $damage;
        }
        $this->avengers = $this->del_dead($this->avengers);
    }

    function del_dead($avengers) {
        for ($i=0; $i < count($avengers); $i++) {
            $data = $avengers[$i];
            if ($data->hp <= 0) {
                array_splice($avengers, $i, 1);
                return $this->del_dead($avengers);
            }
        }
        return $avengers;
    }

    function calculate_losses($cloned_team): void {
        $count = count($cloned_team->avengers) - count($this->avengers);
        if ($count == 0) {
            echo "We haven't lost anyone in this battle!\n";
        }
        else {
            echo "In this battle we lost " . $count ." Avenger(s).\n";
        }
    }


}

/*
$arr = array();
$arr[0] = new Avenger("Tony Stark", "Iron Man", "man", 38,
["intelligence", "durability", "magnetism"], 120);
$arr[1] = new Avenger("Natasha Romanoff", "Black Widow", "woman", 35,
["agility", "martial arts"], 75);
$arr[2] = new Avenger("Carol Danvers", "Captain Marvel", "woman", 27,
["durability", "flight", "interstellar travel"], 95);
$team = new Team(1, $arr);
echo "Battle 1\n";
$cloned_team = clone $team;
$damage = 25;
$team->battle($damage);
$team->calculate_losses($cloned_team);
echo "\nBattle 2\n";
$cloned_team = clone $team;
$damage = 80;
$team->battle($damage);
$team->calculate_losses($cloned_team);

*/