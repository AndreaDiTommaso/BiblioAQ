<?php

class Biblioteca{

    private $conn;
    private $table_name = 'libri';



    public function __construct($db){

        $this->conn = $db;

    }

    function read_all(){

        $query = "SELECT * FROM {$this->table_name};";

        if($result = $this->conn->query($query)){

            return $result;

        }

    }
    function read_by_titolo($titolo){

        $query = "SELECT * FROM {$this->table_name} WHERE titolo = {$titolo};";

        if($result = $this->conn->query($query)){

            return $result;

        }

    }
     function read_by_id($id){

            $query = "SELECT * FROM {$this->table_name} WHERE id = {$id} ;";

            if($result = $this->conn->query($query)){

                return $result;

            }

     }
      function read_by_biblioteca($biblioteca){

             $query = "SELECT * FROM {$this->table_name} WHERE id_biblioteca = {$biblioteca} ;";

             if($result = $this->conn->query($query)){

                 return $result;

             }

      }


}
