<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../models/biblioteca.php';
$id = $_GET['id'];
$data = $_GET['data'];
$d=substr($data,-8,2);
$m=substr($data,-6,2);
$y=substr($data,-4,4);
$database = new Database();
$db = $database->getConnection();
// Creo un nuovo oggetto Biblioteca
$biblioteca = new Biblioteca($db);

$prenotazione=new Prenotazione_accesso($db)
$result=$prenotazione->findBybiblio($id);
$num = $result->num_rows;

if($num>0){

$i=0;
while ($row = $result->fetch_assoc()){

           $dd=substr($row['giorno'],-8,2);
           $mm=substr($row['giorno'],-6,2);
           $yy=substr($row['giorno'],-4,4);
           if($yy==$Y and $mm==$m and $dd==$d){$i=0}

          }

}
$result = $biblioteca->findById($id);
$row = $result->fetch_assoc();
$i=$row['posti']-$i;
echo $i;
