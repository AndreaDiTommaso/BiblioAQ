<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../models/libro.php';
$biblioteca = $_GET['id'];
//$biblioteca= '1';
$database = new Database();
$db = $database->getConnection();
// Creo un nuovo oggetto Biblioteca
$libro = new Libro($db);


$result = $libro->read_by_biblioteca($biblioteca);

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
            "prenotato" => $row['prenotato'],
            "desrizione" => $row['descrizione'],
            "immagine" => $row['immagine'],


        );
        array_push($libro_arr, $libro_item);
    }
    $arr=array();
    $precedente="";
    foreach ($libro_arr as $libro_item)
    {

      if($libro_item['titolo'] != $precedente)
      {array_push($arr, $libro_item);}
      $precedente=$libro_item['titolo'];
    }
        $i=0;
        foreach ($arr as $libro_item)
            {

               $name=$libro_item['titolo'];
               $copie=0;
               foreach ($libro_arr as $libro_item2)
                  {

                    if($libro_item2['titolo'] == $name && !$libro_item2['prenotato'])
                    {$copie=$copie+1;}

                  }

               $arr[$i] += ["copie"=>$copie];
               $i=$i+1;
            }


    echo json_encode($arr);

}else{
    echo json_encode(
        array("message" => "Nessuna Libro Trovato.")
    );
}

?>
