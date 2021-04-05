<?php
    class Note {
        public $name = "";
        public $importance = "";
        public $content = "";
        public $date = null;

        function __construct($name, $importance, $content, $date) {
            $this->name = $name;
            $this->importance = $importance;
            $this->content = $content;
            if ($date == 0)
                $this->date = date('Y-m-d h:i:s a', time());
            else
                $this->date = $date;

            file_put_contents( "json/".$name . ".json", json_encode($this));
        }

        function toString() {
            return $this->date . " > " . $this->name;
        }
    }

?>