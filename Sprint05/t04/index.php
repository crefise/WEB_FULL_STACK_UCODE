<?php




function total($number = 0, $price = 0, $total = 0) : float{
    $result = ($total += ($number * $price));
    return $result;
}

/*
$basket_total = total(1, 0.1);
$basket_total = total(1, 0.2, $basket_total);
echo "\nPrice of order is $basket_total\n";
$basket_total = total(3, 1.4, $basket_total);
echo "\nPrice of order is $basket_total\n";
*/