<?php namespace Space\Normal;

function calculate_time() {

    $first_date = date_create("NOW");
    $second_date = date_create("01.01.1939");
    $diff_date = date_diff($first_date,$second_date);
    return $diff_date;
}