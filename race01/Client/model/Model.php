<?php

abstract class Model {
    protected $connection;

    public function __construct() {
        $this->setConnection();
    }
    public function __destruct()
    {
        unset($this->connection);
    }


    protected function setConnection() {
        $this->connection = new DatabaseConnection("127.0.0.1",NULL, "vponomaren", "securepass", "marvel_battle");
    }

    abstract public function find($id);
    abstract public function delete($id);
    abstract public function save();
}


?>