<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="ISO-8859-1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Charset</h1>
    <form method="post">
        <span>Change charset: </span>
        <input name = "input1" placeholder="Input string"><br>

        <span>Select charset or several charsets: </span>
        <select multiple name = "select[]">
            <option name = "UTF-8">UTF-8</option>
            <option name = "ISO-8859-1">ISO-8859-1</option>
            <option name = "Windows-1252">Windows-1252</option>
        </select>
        <input type = "submit" value = "Change charset">
        <input type = "submit" value="Clear" name = "clear">
    </form>

    <?php 
        if ($_POST['input1']) {
            $str = $_POST['input1'];
            if ($_POST['clear']) {
                unset($_POST["select"]);
                unset($_POST["input1"]);
                unset($_POST["clear"]);
            }
            echo "Input string: <textarea>" . $str . "</textarea><br>";
            if ($_POST["select"][0])
                echo "UTF-8: <textarea>" . mb_convert_encoding($str,"UTF-8") . "</textarea><br>";
            if ($_POST["select"][1])
                echo "ISO-8859-1: <textarea>" . mb_convert_encoding($str,"ISO-8859-1") . "</textarea><br>";
            if ($_POST["select"][2])
                echo "Windows-1252: <textarea>" . mb_convert_encoding($str,"Windows-1252") . "</textarea><br>";
        }
    ?>
</body>
</html>