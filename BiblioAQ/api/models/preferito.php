<?php

class Preferito{

    private $conn;
    private $table_name = 'preferiti';



    public function __construct($db){

        $this->conn = $db;

    }

    function read_all(){

        $query = "SELECT * FROM {$this->table_name};";

        if($result = $this->conn->query($query)){

            return $result;

        }

    }
    function read_by_utente($utente){

        $query = "SELECT * FROM {$this->table_name} WHERE id_utente = {$utente};";

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
     function add($utente,$libro){
       $query = "INSERT INTO {$this->table_name} VALUES (NULL,{$utente}, {$libro});";

                 if($result = $this->conn->query($query)){

                     return $result;

                 }

          }
          function remove($utente,$libro){

           $query = "DELETE   FROM {$this->table_name} WHERE id_utente={$utente} AND id_libro={$libro} ";


                           if($result = $this->conn->query($query)){

                               return $result;

                           }
          }
           function read($utente,$libro){

                     $query = "SELECT * FROM {$this->table_name} WHERE id_utente={$utente} AND id_libro={$libro} ";


                                     if($result = $this->conn->query($query)){

                                         return $result;

                                     }
                    }
}
