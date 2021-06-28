<?php

ini_set('display_errors', true);
error_reporting(E_ALL);


require "../config/database.php";
require "../config/token.php";
require "../models/utente.php";
require "../vendor/autoload.php";



use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$database = new Database();
$db = $database->getConnection();
$utente = new Utente($db);


$data = json_decode(file_get_contents("php://input"));

//$utente->email = $data->email;
//$password = $data->password;

$utente->email = 'and@gmail.com';
$password = 'ciao';
//echo $utente->email_exist();
//echo password_verify($password, $utente->password);
if($utente->email_exist() && password_verify($password, $utente->password)){

    $token = array(
        "iat" => $issued,
        "exp" => $expire,
        "iss" => $issuer,
        "data" => array(
            "id" => $utente->id,
            "nome" => $utente->nome,
            "cognome" => $utente->cognome,
            "email" => $utente->email


        )
    );
    $jwt = JWT::encode($token, $key);

             $item = array(
                "id" => $utente->id,
                "nome" => $utente->nome,
                "cognome" => $utente->cognome,
                "email" => $utente->email,
                "password" => $utente->password,
                "token"=>$jwt


      );
      //echo $item['id'];
     // $item =json_encode($item);

    http_response_code(200);
 echo json_encode($item);
   // $jwt = JWT::encode($token, $key);
  /*  echo json_encode(array(
        "message" => "login avvenuto con successo",
        "jwt" => $jwt,
        "item"=>$item
    ));
    $item =json_encode($item);
    */

} else{
    http_response_code(401);

    echo json_encode(array("message"=> "errore"));
}

