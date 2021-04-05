
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
    use \DateInterval; 
    function calculate_time() 
    {
        $time = date_diff(
            ((date_create("1939-01-01"))->add(new DateInterval('PT'.((int)(date_diff(date_create("Now"), date_create("1939-01-01"))->format("%a")/7*24*3600)).'S'))
        ), (date_create("1939-01-01"))); 
        return [ $time->format("%Y"), $time->format("%m"), $time->format("%d")]; 
    }
        $time = calculate_time();
        echo "\nIn quantum space you were absent for " . $time[0] . " years, " .
        $time[1] . " months, " . $time[2] . " days\n";
    ?>
</body>
</html>
