<?php

class Overload {
    public function __set($property, $value) {
        $this->$property = $value;
    }
    public function __get($property) {
        //property_exists
        if (!property_exists($this, $property)) {
            return "NO DATA";
        }
        else {
            return $this->$property;
        }
    }
    public function __isset($name)
    {
        if (!property_exists($this, $name)) {
            $this->$name = "NOT SET";
        }
        return true;
    }

    public function __unset($name) 
    {
        if (!property_exists($this, $name)) {
            $this->$name = NULL;
        }
    }
}

require_once(__DIR__ . "/Overload.php");
$overload = new Overload();

$overload->mark_LXXXV = "INACTIVE";
echo $overload->mark_LXXXV;

echo "\n" . $overload->mark_LXXXVI;


if (isset($overload->mark_LXXXVI))
    echo "\n" . $overload->mark_LXXXVI;
unset($overload->mark_IV);
if ($overload->mark_IV == NULL)
    echo "\nNULL\n";