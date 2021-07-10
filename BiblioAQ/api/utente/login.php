<?php

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

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers");
    header("HTTP/1.1 200 OK");
    die();
}


$database = new Database();
$db = $database->getConnection();
$utente = new Utente($db);


$data = json_decode(file_get_contents("php://input"));

$utente->email = $data->email;
$password = $data->password;

if($utente->email_exist() && password_verify($password, $utente->password)){

    $token = array(
        "iat" => $issued,
        "exp" => $expire,
        "iss" => $issuer,
    );
    $jwt = JWT::encode($token, $key);

    $data = array(
         "id"=>$utente->id,
        "nome" => $utente->nome,
        "cognome" => $utente->cognome,
        "email" => $utente->email
    );


    http_response_code(200);
    echo json_encode(array(
 	    "jwt" => $jwt,
        "utente" => $data)
    );


} else{
    http_response_code(401);

    echo json_encode(array("message"=> "errore"));
}

