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
//$id = $_GET['id'];
$id='2';
$database = new Database();
$db = $database->getConnection();
// Creo un nuovo oggetto Biblioteca
$libro = new Libro($db);


$result = $libro->prenota($id);


    echo json_encode($result);




?>
