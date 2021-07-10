<?php

include_once '../config/database.php';
include_once '../models/utente.php';
require "../config/token.php";
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


$password_hash = password_hash($data->password, PASSWORD_BCRYPT);


$utente->nome = $data->nome;
$utente->cognome = $data->cognome;
$utente->email = $data->email;
$utente->password = $password_hash;

if($utente->email_exist()){
    http_response_code(406);
    echo json_encode(array(
        "message" => "email già esistente"
    ));

} elseif($utente->create()){
    $token = array(
        "iat" => $issued,
        "exp" => $expire,
        "iss" => $issuer
     );
     $data = array(
     "nome" => $utente->nome,
     "cognome" => $utente->cognome,
     "email" => $utente->email
    );
    http_response_code(200);

    $jwt = JWT::encode($token, $key);
    echo json_encode(array(
        "jwt" => $jwt,
        "utente" => $data
    ));

}else{
    http_response_code(400);
}

?>  


