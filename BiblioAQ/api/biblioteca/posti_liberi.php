<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../models/biblioteca.php';
include_once '../models/prenotazione_accesso.php';
$id = $_GET['id'];
$data = $_GET['data'];
$d=substr($data,-8,2);
$m=substr($data,-6,2);
$y=substr($data,-4,4);
$database = new Database();
$db = $database->getConnection();
// Creo un nuovo oggetto Biblioteca
$biblioteca = new Biblioteca($db);

$prenotazione=new Prenotazione_accesso($db);
$result=$prenotazione->findBybiblio($id);
$num = $result->num_rows;
$i=0;
if($num>0){

while ($row = $result->fetch_assoc()){

if (strlen($row['giorno'])==8){$dd=substr($row['giorno'],-8,2);}else{$dd=substr($row['giorno'],-7,1);}

           $mm=substr($row['giorno'],-6,2);
           $yy=substr($row['giorno'],-4,4);

           if($yy==$y and $mm==$m and $dd==$d){$i=$i+1;}

          }

}
$result = $biblioteca->findById($id);
$row = $result->fetch_assoc();
$i=$row['posti']-$i;
  $item = array("posti" => $i);


    echo json_encode($item);




