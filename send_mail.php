<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Vérification méthode
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Méthode invalide"]);
    exit;
}

// Récupération des données
$data = json_decode(file_get_contents('php://input'), true) ?? $_POST;

$name = strip_tags($data['name'] ?? '');
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
$message = strip_tags($data['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Champs invalides"]);
    exit;
}

// Configuration IONOS
$to = "contact@kboussakri.com";
$subject = "Nouveau message de $name";
$body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envoi
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => error_get_last()['message'] ?? "Échec de l'envoi"]);
}