<?php

class Product {
    public $name = "";
    public $kcal_per_portion = 0;
    function __construct($name , $kcal)
    {
        $this->name = $name;
        $this->kcal_per_portion = $kcal;
    }

    function getName() {
        return $this->name;
    }
    function getKcal() {
        return $this->kcal_per_portion;
    }
}