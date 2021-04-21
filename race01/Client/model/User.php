<?php
    require_once(__DIR__ . "/Model.php");
    require_once(__DIR__ . "/DatabaseConnection.php"); 

    class User extends Model {
        private $login = "";
        private $path_image = "";

        function get_login() {
            return $this->login;
        }
        function get_path_image() {
            return $this->path_image;
        }

        function __construct($login, $path_image = NULL) {
            parent::__construct();
            $this->login = $login;
            $this->path_image = $path_image;

        }
        function __destruct(){
            parent::__destruct();
        }

        public function find($login) {
            if (!$this->connection->getConnectionStatus()) {
                echo "ERROR\n";
                return;
            }
            $request = mysqli_query($this->connection->connection, "SELECT * FROM  online_users WHERE login = '$login';");
            if($request != false || !isset($request)) {
                $request = mysqli_fetch_assoc($request);
                $this->login = $request["login"];
                $this->path_image = $request["path_avatar"];
                return true;
            }
            else {
                return false;
            }


        }
        public function save() {
            if (!$this->connection->getConnectionStatus()) {
                echo "<br>ERROR DATABASE CONNECTION!<br>";
                return false;
            }
            $request = mysqli_query($this->connection->connection, "INSERT INTO online_users (login, path_avatar) VALUES ('$this->login', '$this->path_image');");
            if ($request == NULL) {
                echo "error_save_db";
            }
            return true;
        }
        public function delete($login){}
        
    }


?>

