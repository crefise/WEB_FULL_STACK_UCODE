<?php namespace Space\Quantum;

use \DateInterval; 

function calculate_time() 
{
    $time = date_diff(
        ((date_create("1939-01-01"))->add(new DateInterval('PT'.((int)(date_diff(date_create("Now"), date_create("1939-01-01"))->format("%a")/7*24*3600)).'S'))
    ), (date_create("1939-01-01"))); 
    return [ $time->format("%Y"), $time->format("%m"), $time->format("%d")]; 
}
