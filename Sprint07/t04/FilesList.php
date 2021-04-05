<?php
    class FilesList {
        public $path = "";
        public $result = "";
        function __construct($path)
        {
            $this->path = $path;
            $files = scandir($this->path);
            foreach($files as $name) {
               if ($name == "." || $name == ".." || count($name) < 1)
                    continue;
                $this->result = $this->result . ("<li><a href='?file=" . $name ."'>".$name."</a></li>") . "\n";
            }
            $this->result = "<ul>" . $this->result . "</ul>";
        }
        function toList() {
            return $this->result;
        }
    }

?>

