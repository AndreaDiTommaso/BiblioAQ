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

}
