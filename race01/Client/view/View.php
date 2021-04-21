<?php 
    class View {
        public $template = "";
        function __construct($template)
        {
            $this->template = $template;
        }
        function render() {
            include ($this->template);
        }
    }
?>
