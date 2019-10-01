<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-Requested-With');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $email = $request->email;

    $name= $request->name;
    $email= $request->email;
    $company=$request->subject;
    $text=$request->msn;

    $send_to = "lolovive2@gmail.com";
    $from = "labnova@prodigy.net.mx";
    $body='
    <html>
    <head>
    <title>Contacto nova</title>
    </head>
    <body>
    <table cellpadding="15" cellspacing="0">
        <tr>
            <td><th>Name</th></td> <td> '.$name.' </td>
        </tr>
        <tr>
            <td><th>Email</th><td>'. $email .'</td>
        </tr>
        <tr>
            <td><th>Mensaje</th></td><td>'.$text.'</td>
        </tr>
    </table>
    </body>
    </html>';

    $head  = 'MIME-Version: 1.0' . "\r\n";
    $head .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $head .= 'From: ' . $from . "\r\n";

    if(mail($send_to, "Contacto NOVA Sitio web", $body, $head)){
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }

?>