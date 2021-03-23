<?php



class Tower extends Building {
    private $elevator;
    private $arc_capacity;
    private $height;

    function hasElevator() {
        return $this->elevator;
    }
    function setElevator($temp) {
        $this->elevator = $temp;
    }

    function getArcCapacity() {
        return $this->arc_capacity;
    }
    function setArcCapacity($temp) {
        $this->arc_capacity = $temp;
    }

    function getHeight() {
        return $this->height;
    }
    function setHeight($temp) {
        $this->height = $temp;
    }

    public function getFloorHeight() : float {
        return $this->height / $this->floors;
    }

    public function toString() : string
    {
        if ($this->arc_capacity == true)
            $temp = "+";
        else 
            $temp = "-";
        $props = ["Floors : " . $this->floors,
            "Material : " . $this->material,
            "Address : " . $this->address,
            "Elevator : " . $temp,
            "Arc reactor capacity : " . $this->arc_capacity,
            "Height : " . $this->height,
            "Floor height : " . $this->getFloorHeight(),
        ];

        $str = "";

        foreach ($props as $p)
            $str = $str . $p . "\n";
        return $str;
    }
}

/*
require_once(__DIR__ . "/Building.php");
require_once(__DIR__ . "/Tower.php");
$StarkTower = new Tower(93, "Different", "Manhattan, NY");
$StarkTower->setElevator(true);
$StarkTower->setArcCapacity(70);
$StarkTower->setHeight(1130);
echo $StarkTower->toString();
*/