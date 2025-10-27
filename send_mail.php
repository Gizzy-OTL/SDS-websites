<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $prenom = trim($_POST["prenom"]);
        $nom = trim($_POST["nom"]);
        $email = trim($_POST["email"]);
        $message = trim($_POST["message"]);

        if (empty($prenom) || empty($nom) || empty($email) || empty($message)) {
            echo json_encode(["status" => "error", "message" => "Tous les champs sont requis."]);
            exit;
        }

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(["status" => "error", "message" => "Adresse e-mail invalide."]);
            exit;
        }
        $to = "louisgizard@gmail.com";
        $subject ="[SDS-Websites] nouveau message de $prenom $nom";
        $headers ="From: $email\r\n";
        $headers .="Reply-To: $email\r\n";
        $headers .="Content-Type: text/plain; charset=UTF-8\r\n";

        $body = "Vous avez reçu un nouveau message de votre formulaire de contact.\n\n";
        $body .= "Nom: $prenom $nom\n";
        $body .= "E-mail: $email\n\n";
        $body .= "Message:\n$message\n";

        if (mail($to, $subject, $body, $headers)) {
            echo json_encode(["status" => "success", "message" => "Votre message a été envoyé avec succès."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Une erreur est survenue lors de l'envoi de votre message."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Méthode non autorisée."]);
    }
?>