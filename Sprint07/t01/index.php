<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="t08" content="t08">
    <link rel="stylesheet" href="style.css">
    <title>t08</title>

    <style>
    #my_form {
    border: 1px solid black;
    padding: 10px;
    }
    div {
        padding: 5px;
    }
    .div_t {
        border: 1px solid black;
        padding: 10px;
        margin-top: 15px;

    }
    body {
        padding: 10px;
    }
</style>
</head>
<body>
<?php 
    if (!$_POST) {
    echo '<form id = "my_form" method = "post">
        <fieldset >
            <legend>
                About the Superhero
            </legend>

            <div>
                <span>Real Name</span>
                <input name = "name" autofocus placeholder="Superhero real name">
                <span>Superhero Name</span>
                <input name = "alias" placeholder="Superhero alias">
                <span>Age</span>
                <input name = "age" type="number" min= "1" max ="999" step ="1">
            </div>

            <div>
                <span>About</span>
                <textarea name = "description" rows="5" cols="70" maxlength="500" placeholder="Information about the superhero, max 500 sybmols"></textarea>
            </div>

            <div>
                <span>Photo: </span>
                <input type= "file" name = "file">
            </div>
        </fieldset>




        <fieldset>
            <legend>
                Powers
            </legend>
            
            <div>
                <input name = "experience0" type = "checkbox" value = "Telekinesis"><span> Telekinesis</span>
                <input name = "experience1" type = "checkbox" value = "Super strenght or speed"><span> Super strenght or speed</span>
                <input name = "experience2" type = "checkbox" value = "Shapeshifting"><span> Shapeshifting</span>
                <input name = "experience3" type = "checkbox" value = "Fight"><span> Fight</span>
                <input name = "experience4" type = "checkbox" value = "Elemental control"><span> Elemental control</span>
                <input name = "experience5" type = "checkbox" value = "Other"><span> Other</span>
            </div>
    
            <div>
                <span>Level of control </span><input name = "level" type="range" min="0" max="10" step="1" value="1"> 
            </div>

        </fieldset>


        <fieldset>
            <legend>
                Origin of Powers
            </legend>
            
            <div>
                <input name="radio" type="radio" value = "Uknown"><span> Uknown</span>
                <input name="radio" type="radio" value = "Fleak lab accident"><span> Fleak lab accident</span>
                <input name="radio" type="radio" value = "Chosen by an ancident wise being"><span> Chosen by an ancident wise being</span>
                <input name="radio" type="radio" value = "The superhero is no human"><span> The superhero is no human</span>
                <input name="radio" type="radio" value = "Elemental control"><span> Elemental control</span>
                <input name="radio" type="radio" value = "Other"><span> Other</span>
            </div>
        </fieldset>
        <div>
            <button type="reset">CLEAR</button>
            <button>SEND</button>
        </div>
    </form>';
    }
    else {
        $counter = 0;
        for ($i=0; $i < 6; $i++) { 
            if ($_POST["experience" . $i]) 
                $counter++;
        }
        echo "name: " . $_POST['name'] . "<br>";
        echo "alias: " . $_POST['alias'] . "<br>";
        echo "age: " . $_POST['age'] . "<br>";
        echo "description: " . $_POST['description'] . "<br>";
        echo "file: " . $_POST['file'] . "<br>";
        echo "experience: " . $counter . "<br>";
        echo "level: " . $_POST['level'] . "<br>";
        echo "purpose: " . $_POST['radio'] . "<br>";
        echo '    <form method="get"> <div class = "div_t">
        <button>FORGET</button></div>
    </form>';
    }
    ?>

</body>
</html>