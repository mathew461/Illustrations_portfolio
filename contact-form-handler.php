<?php
    $name = $_Post['name'];
    $visitor_email = $_Post['email'];
    $message = $_POST['message']; 

    $email_from = 'mathew461@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email.\n".
                  "User Message: $message.\n ";
    
    $to = "mathew461@gmail.com";    

    $headers = "From $email_from \r\n";

    $headers = "Reply-to: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html");

?>