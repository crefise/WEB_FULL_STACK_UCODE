<?php

class StrFrequency {
    public $str;
    function __construct($str)
    {
        $this->str = $str;
    }

    public function letterFrequencies() {
        $alphabet_apper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $alphabet_lower = strtolower($alphabet_apper);
        $array = array();
        for ($i=0; $i < strlen($alphabet_apper); $i++) { 
            $counter = substr_count($this->str, $alphabet_apper[$i]);
            $counter += substr_count($this->str, $alphabet_lower[$i]);
            if ($counter != 0)
                $array += [$alphabet_apper[$i] => $counter];
        }
        return $array;
    }

    public function wordFrequencies() {
        $array = str_word_count($this->str, 1);
        $array_result = array();
        $temp_str = strtoupper($this->str);
        for ($i=0; $i < count($array); $i++) { 
            $array[$i] = strtoupper(preg_replace('/\PL/u', '', $array[$i]));
        }
        $counter = array_count_values($array);
        foreach ($counter as $k => $v) {
            $array_result += [ $k => $v];
        }
        return $array_result;
    }

    public function reverseString() {
        return preg_replace('/\PL/u', ' ', strrev($this->str));
    }
}


/*
function test($string)
{
    $obj = new StrFrequency($string);
    $symbol = $obj->letterFrequencies();
    echo "Letters in " . $string . "\n";
    foreach ($symbol as $k => $v) {
    echo "Letter ". $k . " is repeated " . $v . " times\n";
    }
   
    $symbol = $obj->wordFrequencies();
     
    echo "Words in " . $string . "\n";
    foreach ($symbol as $k => $v) {
    echo "Word ". $k . " is repeated " . $v . " times\n";
    }
    echo "Reverse the string: " . $string . "\n";
    echo $obj->reverseString() . "\n";

}


test("Face it, Harley-- you and your Puddin' are kaput!");
echo "*************\n";
test(" Test test 123 45 !0 f HeLlO wOrLd ");
echo "*************\n";
test("");
*/