<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../models/libro.php';
include_once '../models/preferito.php';
$id = $_GET['utente'];

$database = new Database();
$db = $database->getConnection();

$preferiti= new Preferito($db);


$result = $preferiti->read_by_utente($id);

$num = $result->num_rows;

if($num>0){
    $libro_arr = array();
    while ($row = $result->fetch_assoc()){
    $libro=new Libro($db);
    $l=$libro->read_by_id($row['id_libro']);
     $r = $l->fetch_assoc();
        $libro_item = array(
            "id" => $r['id'],
            "titolo" => $r['titolo'],
            "autore" => $r['autore'],
            "casaeditrice" => $r['casa_editrice'],
            "genere" => $r['genere'],
            "idbiblioteca" => $r['id_biblioteca'],
            "nomebiblioteca" => $r['nome_biblioteca'],
            "nonprenotato" => $r['non_prenotato'],
            "desrizione" => $r['descrizione'],
            "immagine" => $r['immagine'],


        );
        array_push($libro_arr, $libro_item);


}








        echo json_encode($libro_arr);
    }

    else{
    echo json_encode(
        array("message" => "Nessun libro Trovato.")
    );
}

?>
