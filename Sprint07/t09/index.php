<?php
$public_key = "9ec81340c08206094a76516e92e0e4ab";
$privat_key = "05bcea6d2b1836376001b409ad53773b5d350e19";
$ts = time();


$curl = curl_init("http://gateway.marvel.com/v1/public/comics?ts=". $time . "&apikey=" . $public_key . "&hash=" . md5($time.$privat_key.$public_key));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($curl);
curl_close($curl);
$data = json_decode($response, true);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   <style>
    .data{
        background-color: gray;
        border: 1px solid red;
        padding: 20px;
    }

    .array {
        color: white;
        background-color: green;
    }

    .no_a {
        background-color: blue;
        border: 2px solid red;
        padding: 10px;
        margin: 5px
    }
   </style>
</head>

<body>
    <?php
        function parser($data) {
            echo "<div class='data'>";
            foreach($data as $key => $value) {
                if (!is_array($value)) {
                    echo "<div class = 'no_a'>$key: <span>" . $value . "</span></div>";
                }
                else {
                    echo "<p class = 'array'>" . $key . "</p>";
                    parser($data[$key]);
                }
            }
            echo "</div>";
        }
        parser($data);
    ?>

</body>

</html>