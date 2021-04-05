<?php

    include "./Note.php";

    class NotePad {
        public $notes = [];
        function add($name, $importance, $content, $date = 0) {
            array_push($this->notes, new Note($name, $importance, $content, $date));
        }
        function addN($node) {
            array_push($this->notes, $node);
        }

        function remove($index) {
            array_splice($this->notes, $index, 1);
        }

        function get($index) {
            return $this->notes[$index];
        }

        function size() {
            return count($this->notes);
        }
    }
?>