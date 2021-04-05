<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <div><h1>Do you love avenger?</h1></div>
        <input type = "radio" name = "inp" value="1">No<br>
        <input type = "radio" name = "inp" value="2">of course no<br>
        <input type = "radio" name = "inp" value="3">Yeees<br>
        <button>I made a choise!</button>
    </form>
    <?php
        $answer1 = $_POST['inp'];
        if(!$answer1){
            echo "<div id='results'></div>";
        }
        else{
            if ($answer1 == "3") {
                echo "<div id='results'>You are correct!</div>";
            }
            else{
                echo "<div id='results'>Lose</div>";
            }
        }
    ?>
</body>
</html>