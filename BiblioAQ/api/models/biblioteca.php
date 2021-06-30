<?php

class Biblioteca{

    private $conn;
    private $table_name = 'biblioteche';

    public $id;
    public $nome;
    public $posti;
    public $orari;
    public $telefono;
    public $indirizzo;
    public $latitudine;
    public $longitudine;
    public $info;
    public $immagine;


    public function __construct($db){

        $this->conn = $db;

    }

    function read(){

        $query = "SELECT * FROM {$this->table_name};";

        if($result = $this->conn->query($query)){

            return $result;



        }


    }
    function findById($id)
    {
          $query = "SELECT * FROM {$this->table_name} WHERE id={$id}; ";

           if($result = $this->conn->query($query))
           {

                 return $result;
           }
    }
    function prenota($id,$posti)

        {
        $posti=$posti-1;
              $query = "UPDATE {$this->table_name} SET posti_liberi = {$posti} WHERE id = {$id} ;";

               if($result = $this->conn->query($query))
               {

                     return $result;
               }
        }

}
