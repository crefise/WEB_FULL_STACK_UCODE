<?php 

require_once("./controller/ControllerInterface.php");
require_once("./view/View.php");

class Controller_main implements ControllerInterface{
    public $view = "";
    function __construct() {
        $this->view = "view/main.php";
    }
    function execute() {
        $vi = new View($this->view);
        $vi->render();
        unset($vi);
    }
    function action_nothing() {}
    function action_logout() {
        session_unset();
        echo '<script>location.replace("/");</script>';
    }
    function action_fight() {
        $card_array = [];
        foreach($_GET as $name => $value) {
            array_push($card_array, $name);
        }
        $_SESSION['card'] = serialize($card_array);
        echo '<script>location.replace("/fight");</script>';
    }
}
if (!isset($_SESSION['login'])) {

    echo '<script>location.replace("/");</script>';

}
else {
    $main = new Controller_main();
    $main->execute();
}


?>