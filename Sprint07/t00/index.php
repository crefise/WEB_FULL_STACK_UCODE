<?php
       $str = 'array['.time().']';
        setcookie($str, 1, time() + 60);
    $counter = 1;
        if ($_COOKIE['array']) {
        foreach ($_COOKIE['array'] as $name => $value) {
            $counter++;
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="" content="">
    <title>t00</title>
</head>
<body>
        <h1>Cookie counter</h1>
    This page was loaded
    <?php
        echo $counter;
        
    ?>
    time(s) in last minute;
</body>
</html>

