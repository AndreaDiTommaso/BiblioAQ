<?php

class Libro{

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
      function prenota($id){

             $query = "UPDATE {$this->table_name} SET non_prenotato = False WHERE id = {$id} ;";

             if($result = $this->conn->query($query)){

                 return $result;

             }

      }
      function copie($titolo,$biblioteca){

                   $query = "SELECT * FROM {$this->table_name} WHERE titolo = '{$titolo}' AND id_biblioteca = {$biblioteca} AND non_prenotato = TRUE  ;";

                   if($result = $this->conn->query($query)){
                       $num = $result->num_rows;
                       $result;
                       return $num;

                   }
                   $result;

            }

}
