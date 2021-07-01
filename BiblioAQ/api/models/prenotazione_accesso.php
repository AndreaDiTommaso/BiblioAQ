<?php

class Prenotazione_accesso{

    private $conn;
    private $table_name = 'prenotazioni_accesso';



    public function __construct($db){

        $this->conn = $db;

    }

    function read_all(){

        $query = "SELECT * FROM {$this->table_name};";

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
       function findBybiblio($id){

                 $query = "SELECT * FROM {$this->table_name} WHERE id_biblioteca = {$id} ;";

                 if($result = $this->conn->query($query)){

                     return $result;

                 }

          }

      function read_by_utente($utente){

             $query = "SELECT * FROM {$this->table_name} WHERE id_utente = {$utente} ;";

             if($result = $this->conn->query($query)){

                 return $result;

             }

      }
      function read_by_libro($libro){

                   $query = "SELECT * FROM {$this->table_name} WHERE id_libro = {$libro} ;";

                   if($result = $this->conn->query($query)){

                       return $result;

                   }

            }
      function prenota($id_biblio,$id_utente,$data){

             $query = "INSERT INTO {$this->table_name} VALUES (NULL, {$data},{$id_biblio},{$id_utente});";

             if($result = $this->conn->query($query)){

                 return $result;

             }

      }
      function elimina($id){

                   $query ="DELETE FROM {$this->table_name} WHERE id  = {$id};";

                   if($result = $this->conn->query($query)){
                       $num = $result->num_rows;
                       $result;
                       return $num;

                   }
                   $result;

            }
            }

