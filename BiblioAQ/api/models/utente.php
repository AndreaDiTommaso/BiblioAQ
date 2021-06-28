<?php



class Utente{

    private $conn;
    private $table_name = 'utenti';

    public $nome;
    public $cognome;
    public $email;
    public $password;

    public function __construct($db){

        $this->conn = $db;

    }

    function create(){
        $this->nome = htmlspecialchars(strip_tags($this->nome));
        $this->cognome = htmlspecialchars(strip_tags($this->cognome));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));

        $query = "INSERT INTO {$this->table_name} VALUES (null, '{$this->nome}', '{$this->cognome}',  '{$this->email}', '{$this->password}');";

        if($result = $this->conn->query($query)){

            return true;

        }
        return false;

    }

    function email_exist(){

        $this->email = htmlspecialchars(strip_tags($this->email));
        $query = "SELECT * FROM {$this->table_name} WHERE email = '{$this->email}'";

        if($result = $this->conn->query($query)){

            if($result->num_rows > 0){
              $row = $result->fetch_assoc();
              $this->id=$row['id'];
              $this->password=$row['password'];
              $this->nome=$row['nome'];
              $this->cognome=$row['cognome'];
                return true;
            }
        }
    }



}

?>
