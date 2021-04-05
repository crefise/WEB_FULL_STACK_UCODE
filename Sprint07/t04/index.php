<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>t04</title>
</head>
<body>
    <? 
    error_reporting(0);
        include "./File.php";
        include "./FilesList.php";
    ?>
    <form method = "post">
        <h1>Files</h1>
        <span>File name:</span>
        <input name = "filename" required>
        <span>Content</span>
        <textarea name = "text"></textarea required>
        <button type = "submit" name = "create">Create file</button>
    </form>

    <? 
        if ($_POST['text']) {
            $fl = new File("tmp/" . $_POST["filename"]);
            $fl->write($_POST['text']);
        }
        if (($_POST['delete'])) {

            unlink("tmp/" . $_GET['file']);
            unset($_GET['file']);
            unset($_POST['delete']);
            echo '<script>location.replace("index.php");</script>';
        }


        if(count(scandir("tmp")) > 2)
            echo "<h2>List of files:</h2>";
    
    ?>


    <?php
            $files = new FilesList("tmp");
            echo  $files->toList();
            unset($_POST['text']);
            unset($_POST['filename']);

        if (isset($_GET['file'])) {
            echo "<h2>Selected file: ". $_GET['file'] . "</h2>";
            echo "<form method = 'post'><input type='submit' name = 'delete'><form><br><br>";
            echo file_get_contents("tmp/" . $_GET['file']);
        }
    ?>
    
</body>
</html>