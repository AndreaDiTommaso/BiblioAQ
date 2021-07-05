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
include_once '../models/prenotazione_accesso.php';
$utente= $_GET['utente'];

$database = new Database();
$db = $database->getConnection();
$prenotazione= new Prenotazione_accesso($db);
$result = $prenotazione->read_by_utente($utente);
// Creo un nuovo oggetto Biblioteca





$num = $result->num_rows;
// se vengono trovate biblioteche nel database
if($num>0){
    $biblio_arr = array();
    while ($row = $result->fetch_assoc()){
     $biblioteca = new Biblioteca($db);
        $b=$biblioteca->findById($row['id_biblioteca']);
         $r = $b->fetch_assoc();
        $biblio_item = array(
            "id" => $r['id'],
            "nome" => $r['nome'],
            "orari" => $r['orari'],
            "indirizzo" => $r['indirizzo'],
            "telefono" => $r['telefono'],
            "latitudine" => $r['latitudine'],
            "longitudine" => $r['longitudine'],
            "posti" => $r['posti'],
            "info" => $r['info'],
            "immagine" => $r['immagine']

        );
        array_push($biblio_arr, $biblio_item);
    }
    echo json_encode($biblio_arr);
}else{
$biblio_arr = array();
    echo json_encode(
        $biblio_arr
    );
}

?>
