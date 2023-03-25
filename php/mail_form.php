<?php
$errors = [];
$errorMessage = '';
if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    if (empty($name)) {
        $errors[] = 'Name is empty';
    }
    if (empty($email)) {
        $errors[] = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }
    if (empty($message)) {
        $errors[] = 'Message is empty';
    }
    if (empty($errors)) {
        $toEmail = 'contacto@facundocontreras.com.ar';
        $emailSubject = 'Consulta desde sitio web';
        $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];
        $bodyParagraphs = ["Nombre del posible cliente: {$name}", "--- Email: {$email}", "--- La consulta es la siguiente:", $message];
        $body = join(PHP_EOL, $bodyParagraphs);
        if (mail($toEmail, $emailSubject, $body, $headers)) {
            header("Location: http://www.facundocontreras.com.ar/", TRUE, 301);
        } else {
            $errorMessage = 'Oops, something went wrong. Please try again later';
        }
    } else {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    }
}

?>