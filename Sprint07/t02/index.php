<?php 
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="" content="">
    <title>t02</title>
</head>
<body>
    <h1>Password</h1>
    <?php
        echo "<div id='hacked'>Hacked!</div>";
        echo "<div id='denied'>Access denied!</div>";

        echo '<style>#denied { display: none; color: red}</style>';
        echo '<style>#hacked { display: none; color: green}</style>';

        echo "<form id = 'form1' method = 'post'>Password not saved at session.<br>Password for saving to session. <input placeholder='Password to session' name = 'input_1'><br>Salt for saving to session. <input placeholder = 'Salt to session' name = 'input_2'><br>
        <button>Save</button></form>";
        if ($_POST['input_1'] && $_POST['input_2']) {
            $_SESSION['pass'] = md5($_POST['input_1'] . $_POST['input_2']);
            $_SESSION['salt'] = $_POST['input_2'];
            $page = $_SERVER['PHP_SELF'];
        }
    
        
        echo "<form id = 'form2' method = 'post'>"."Password saved at session.<br>Hash is ". $_SESSION['pass'] ."<br>Try to quess:"."<input placeholder = 'Password to session' name = 'input_3'> <button>Check password</button><br><input name = 'reset' type = 'submit' value = 'clear'></form>";

        if ($_POST['input_3']) {
            if ($_SESSION['pass'] == md5($_POST['input_3'].$_SESSION['salt'])) {
                unset($_SESSION['pass']);
                unset($_SESSION['salt']);
                echo '<style>#hacked { display: block; color: green}</style>';
            }
            else if ($_POST['input_3'] && $_SESSION['pass']) {
                echo '<style>#denied { display: block; color: red}</style>';
            }
        }

        if ($_POST['reset']) {
            unset($_POST['reset']);
            unset($_SESSION['pass']);
            unset($_SESSION['salt']);
        }

        if ($_SESSION['pass']) {
            echo "<style>
            #form1 {
                display: none;
            }
            </style>";
        }
        else {
            echo "<style>
            #form2 {
                display: none;
            }
            </style>";
        }
    ?>
</body>
</html>