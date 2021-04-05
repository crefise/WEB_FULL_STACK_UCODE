<?php

class Ingestion{
    public $id = 0;
    public $meal_type = "";
    public $products = [];
    
    function __construct($meal_type, $id)
    {
        $this->meal_type = $meal_type;
        $this->id = $id;
    }

    function setProduct($product) {
        $this->products[$product->getName()] = $product;
    }

    function getProducts() {
        return $this->products;
    }

    function get_from_fridge($product) {
        if ($this->products[$product]->getKcal() > 200) {
            throw new EatException();
        }
    }
}

include "./Product.php";
include "./EatException.php";

$namesProducts = [
    'Nutella',
    'Chicken',
    'Coca-Cola',
    'Biscuit',
    'Brocolli',
    'Tomatoes',
    'Apple',
    'Potato',
    'Pizza',
    'Beer'
    ];
    $stock = new Ingestion('breakfast', 1);
    foreach ($namesProducts as $name) {
    $stock->setProduct(new Product($name, rand(40, 500)));
    }
    $allProducts = $stock->getProducts();
    foreach ($namesProducts as $product) {
    $count = rand(1, 5);
    try {
        echo "***\nGetting " . $allProducts[$product]->getName() . " that has ";
        echo $allProducts[$product]->getKcal() . " calories.\n";
    $stock->get_from_fridge($product);
    echo "You're doing great, " . $product . " is good!\n";
    } catch (EatException $e) {
    echo "Caught exception: ". $e->getMessage() . "! ";
    echo "Throw " . $product . " away!\n";
    }
    }