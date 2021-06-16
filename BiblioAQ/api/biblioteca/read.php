<?php

/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../models/biblioteca.php';

$database = new Database();
$db = $database->getConnection();
// Creo un nuovo oggetto Biblioteca
$biblioteca = new Biblioteca($db);

$result = $biblioteca->read();
$num = $result->num_rows;
// se vengono trovate biblioteche nel database
if($num>0){
    $biblio_arr = array();
    while ($row = $result->fetch_assoc()){
        $biblio_item = array(
            "id" => $row['id'],
            "nome" => $row['nome'],
            "orari" => $row['orari'],
            "indirizzo" => $row['indirizzo'],
            "telefono" => $row['telefono'],
            "latitudine" => $row['latitudine'],
            "longitudine" => $row['longitudine'],
            "posti" => $row['posti'],
            "info" => $row['info'],
            "immagine" => $row['immagine']

        );
        array_push($biblio_arr, $biblio_item);
    }
    echo json_encode($biblio_arr);
}else{
    echo json_encode(
        array("message" => "Nessuna biblioteca Trovata.")
    );
}

?>
