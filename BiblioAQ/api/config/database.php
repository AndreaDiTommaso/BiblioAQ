<?php

class Database{

    public $conn;


    public function getConnection(){

        $this->conn = new mysqli('localhost', 'manuel', 'fulmic', 'BiblioAQ');
        $this->conn->set_charset('utf-8');
        
        return $this->conn;

    }

}


?>