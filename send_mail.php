<?php
header('Content-Type: application/json');

// Vérification méthode
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success" => false, "error" => "Méthode invalide"]);
    exit;
}

// Récupération des données
$name = strip_tags($_POST['name']);
$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$message = strip_tags($_POST['message']);

if (!$name || !$email || !$message) {
    echo json_encode(["success" => false, "error" => "Champs invalides"]);
    exit;
}

// Destinataire (ton adresse IONOS)
$to = "contact@kboussakri.com";
$subject = "Nouveau message de $name";
$body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
$headers = "From: $email\r\nReply-To: $email\r\n";

// Envoi
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Échec de l'envoi"]);
}
