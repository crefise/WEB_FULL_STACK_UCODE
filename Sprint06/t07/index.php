<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    echo "Name of file of the executed script: " . $_SERVER['PHP_SELF'] . "<br>";
    echo "Arguments passed to the script: ";
    foreach($_SERVER['argv'] as $k) {
        echo $k . ' ';
    }
    echo "<br>";

    echo "IP address of the server: " . $_SERVER['SERVER_ADDR'] . "<br>";
    echo "A name of host that invoke current script: " . $_SERVER['SERVER_NAME'] . "<br>";
    echo "A name and a version of the information protocol: " . $_SERVER['SERVER_PROTOCOL'] . "<br>";
    echo "A query method: " . $_SERVER['REQUEST_METHOD'] . "<br>";
    echo "User-Agent information: " . $_SERVER['HTTP_USER_AGENT'] . "<br>";

    echo "IP address of the client: " . $_SERVER['REMOTE_ADDR'] . "<br>";
    echo "A list of parameters passed by URL: " . $_SERVER['QUERY_STRING'] . "<br>";

?>
</body>
</html>