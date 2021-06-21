<?php
echo "ciao";
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../models/biblioteca.php';
//$id = $_GET['id'];
//echo $id;
$id ='1';
$database = new Database();
$db = $database->getConnection();
// Creo un nuovo oggetto Biblioteca
$biblioteca = new Biblioteca($db);

$result = $biblioteca->findById($id);


// se vengono trovate biblioteche nel database
$biblio_item = array(
  "id" => $result['id'],
  "nome" => $result['nome'],
  "orari" => $result['orari'],
  "indirizzo" => $result['indirizzo'],
  "telefono" => $result['telefono'],
  "latitudine" => $result['latitudine'],
  "longitudine" => $result['longitudine'],
  "posti" => $result['posti'],
  "info" => $result['info'],
  "immagine" => $result['immagine']);


echo json_encode($biblio_item);
