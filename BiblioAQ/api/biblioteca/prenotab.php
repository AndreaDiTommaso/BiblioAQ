<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../models/biblioteca.php';
include_once '../models/prenotazione_accesso.php';
$biblioteca_id = $_GET['biblioteca'];
$utente= $_GET['utente'];
$data= $_GET['data'];
$database = new Database();
$db = $database->getConnection();
// Creo un nuovo oggetto Biblioteca
$biblioteca = new Biblioteca($db);
$prenotazione=new Prenotazione_accesso($db);
$prenotazione->prenota($biblioteca_id,$utente,$data);

$biblio_arr = array();
$result=$biblioteca->findById($biblioteca_id);
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
