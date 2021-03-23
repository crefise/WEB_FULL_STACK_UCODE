<?php

function get_anonymous($name, $alias, $affiliation) {
    return new class($name,$alias,$affiliation) {

        private $Name;
        private $Alias;
        private $Affiliation;

        function __construct($name, $alias, $affiliation)
        {
            $this->Name = $name;
            $this->Alias = $alias;
            $this->Affiliation = $affiliation;
        }

        function getName() {
            return $this->Name;
        }
        function getAlias() {
            return $this->Alias;
        }
        function getAffiliation() {
            return $this->Affiliation;
        }
    };
}

/*
require_once(__DIR__ . "/Anonymous.php");
$mandarin = get_anonymous("Unknown", "Mandarin", "Ten Rings");
print(implode("\n", array("name" => $mandarin->getName(),
"alias" => $mandarin->getAlias(), "affiliation" => $mandarin->getAffiliation())));
*/