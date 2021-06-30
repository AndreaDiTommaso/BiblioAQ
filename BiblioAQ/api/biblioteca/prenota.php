<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../models/biblioteca.php';
$id = $_GET['id'];
$database = new Database();
$db = $database->getConnection();
// Creo un nuovo oggetto Biblioteca
$biblioteca = new Biblioteca($db);
$result=$biblioteca->findById($id);
$row = $result->fetch_assoc();

$biblioteca->prenota($id,$row['posti_liberi']);
$biblio_arr = array();
$result=$biblioteca->findById($id);
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
            "postiliberi" => $row['posti_liberi'],
            "info" => $row['info'],
            "immagine" => $row['immagine']

        );
        array_push($biblio_arr, $biblio_item);
}
    echo json_encode($biblio_arr);
