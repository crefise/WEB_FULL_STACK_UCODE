<?php 

require_once("./controller/ControllerInterface.php");
require_once("./view/View.php");

class Controller_fight implements ControllerInterface{
    public $view = "";
    function __construct() {
        $this->view = "view/fight.php";
    }
    function execute() {
        $vi = new View($this->view);
        $vi->render();
        unset($vi);
    }
    function action_nothing() {}

}
if (!isset($_SESSION['login'])) {
    echo '<script>location.replace("/");</script>';
}
else {
    $main = new Controller_fight();
    $main->execute();
}


?>