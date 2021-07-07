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
$result = $preferito->read($utente,$id_libro);


$num = $result->num_rows;
// se vengono trovate biblioteche nel database
if($num>0){

$row = $result->fetch_assoc();


         $preferito_item = array(
  "id" => $row['id'],
  "utente" => $row['id_utente'],
 "libro" => $row['id_libro'],
            "check" => TRUE


        );
        echo json_encode($preferito_item);


    }

    else{
     $preferito_item = array(


                "check" => FALSE


            );
    echo json_encode($preferito_item);
}
