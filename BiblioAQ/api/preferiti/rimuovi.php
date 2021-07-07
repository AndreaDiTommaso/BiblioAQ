<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../models/libro.php';
include_once '../models/preferito.php';

$id_libro = $_GET['libro'];
$utente =$_GET['utente'];



$database = new Database();
$db = $database->getConnection();

$preferito = new Preferito($db);
$preferito->remove($utente,$id_libro);
$libro = new Libro($db);


$result = $libro->read_by_id($id_libro);

$num = $result->num_rows;
// se vengono trovate biblioteche nel database
if($num>0){

    $row = $result->fetch_assoc();

         $copie=$libro->copie($row['titolo'],$row['id_biblioteca']);
         $libro_item = array(
            "id" => $row['id'],
            "titolo" => $row['titolo'],
            "autore" => $row['autore'],
            "casaeditrice" => $row['casa_editrice'],
            "genere" => $row['genere'],
            "idbiblioteca" => $row['id_biblioteca'],
            "nomebiblioteca" => $row['nome_biblioteca'],
            "nonprenotato" => $row['non_prenotato'],
            "descrizione" => $row['descrizione'],
            "immagine" => $row['immagine'],
            "copie" => $copie


        );
        echo json_encode($libro_item);
    }

    else{
    echo json_encode(
        array("message" => "Nessuna biblioteca Trovata.")
    );
}
