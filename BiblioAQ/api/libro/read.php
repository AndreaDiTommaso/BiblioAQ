<?php

/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../models/libro.php';
$id = $_GET['id'];

$database = new Database();
$db = $database->getConnection();
// Creo un nuovo oggetto Biblioteca
$libro = new Libro($db);


$result = $libro->read_by_id($id);

$num = $result->num_rows;
// se vengono trovate biblioteche nel database
if($num>0){
    $libro_arr = array();
    while ($row = $result->fetch_assoc()){

        $libro_item = array(
            "id" => $row['id'],
            "titolo" => $row['titolo'],
            "autore" => $row['autore'],
            "casaeditrice" => $row['casa_editrice'],
            "genere" => $row['genere'],
            "idbiblioteca" => $row['id_biblioteca'],
            "nonprenotato" => $row['non_prenotato'],
            "descrizione" => $row['descrizione'],
            "immagine" => $row['immagine'],


        );
        array_push($libro_arr, $libro_item);
    }
    echo json_encode($libro_arr);
}else{
    echo json_encode(
        array("message" => "Nessuna biblioteca Trovata.")
    );
}

?>
