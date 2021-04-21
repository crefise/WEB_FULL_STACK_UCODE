<?php 

require_once("./controller/ControllerInterface.php");
require_once("./view/View.php");
require_once("./model/User.php");

class Controller_index implements ControllerInterface{
    public $view = "";
    function __construct() {
        $this->view = "view/index.php";
    }
    function execute() {
        $vi = new View($this->view);
        $vi->render();
        unset($vi);
    }
    function action_nothing() {}
    function action_login() {
        $path = "/assets/user_images/" . rand(1,4) . ".jpeg";
        $_SESSION['login'] = $_GET['login'];
        $_SESSION['path_avatar'] = $path;
        $user = new User($_SESSION['login'], $path);
        $user->save();
        echo '<script>location.replace("/main");</script>';
    }
}
if ($_SESSION['login']) {
    echo '<script>location.replace("/main");</script>';
}
else {
    $main = new Controller_index();
    $main->execute();
}

?>