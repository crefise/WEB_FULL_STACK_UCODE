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
    function calculate_time() {

        $first_date = date_create("NOW");
        $second_date = date_create("01.01.1939");
        $diff_date = date_diff($first_date,$second_date);
        return $diff_date;
    }
    $time = calculate_time();
    echo "In real life you were absent for " . $time->format("%Y") . " years, " .
    $time->format("%m") . " months, " . $time->format("%d") . " days\n";
    ?>
</body>
</html>
