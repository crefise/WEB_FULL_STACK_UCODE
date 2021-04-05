<?php
class File {
    public $path = "";
    function __construct($path) {
        $this->path = $path;
    }

    function write($text) {
        if (!is_dir("tmp"))
            mkdir("tmp");
        file_put_contents($this->path, $text, FILE_APPEND);
    }

    function toList() {
        return file_get_contents($this->path);
    }
}
?>
