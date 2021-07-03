<?php

/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../models/prenotazione_accesso.php';
$utente = $_GET['utente'];

$database = new Database();
$db = $database->getConnection();
// Creo un nuovo oggetto Biblioteca
$prenotazione = new Prenotazione_accesso($db);


$result = $prenotazione->read_by_utente($utente);

$num = $result->num_rows;
// se vengono trovate biblioteche nel database
if($num>0){
   $biblio_arr = array();
    while ($row = $result->fetch_assoc()){
        $biblio_item = array(
            "id" => $row['id'],
            "utente" => $row['id_utente'],
            "biblioteca" => $row['id_biblioteca'],
            "data" => $row['giorno']


 );
        array_push($biblio_arr, $biblio_item);
    }
    echo json_encode($biblio_arr);
}
    else{
    echo json_encode(
        array("message" => "Nessuna prenotazione Trovata.")
    );
}

?>
