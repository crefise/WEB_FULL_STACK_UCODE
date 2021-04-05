<?php 
    include "./NotePad.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>t06</title>
</head>
<body>
    <h1>Notepad mini</h1>
    <form method="post">
        <input placeholder="name" name = "name"><br>
        <select name = "importance">
            <option>low</option>
            <option>medium</option>
            <option>high</option>
        </select><br>
        <textarea name = "content" placeholder="Text of note..."></textarea><br>
        <button name = "create">Create</button><br>
    </form>

    <?php

        $notes = new NotePad();
        $dir_scan = scandir("json/");

        foreach($dir_scan as $name) {
            if ($name == '.' || $name == '..') { continue; }
            $temp = json_decode(file_get_contents("json/" . $name));
            $notes->add($temp->name, $temp->importance, $temp->content, $temp->date);
        }

        if (isset($_POST['create'])) {
            $notes->add($_POST['name'], $_POST['importance'], $_POST['content'], 0);
        }

        if(isset($_GET['del'])) {
            unlink("json/" . ($notes->get($_GET['del']))->name . ".json");
            $notes->remove($_GET['del']);
            echo '<script>location.replace("index.php");</script>';
        }

        if ($notes->size() > 0) {
            echo "<h2>List of notes</h2>";
            $notes_str = "<ul>";
            for ($i=0; $i < $notes->size(); $i++) { 
                $notes_str = $notes_str . "<li><a href='?note=". $i . "'>". $notes->get($i)->toString() . "</a> <a href='?del=" . $i ."'>DELETE</a></li>";
            }
            $notes_str = $notes_str . "</ul>";
            echo $notes_str;
        }

        
        if(isset($_GET['note']) && $notes->size() > 0) {
            $curr = $notes->get(intval($_GET['note']));
            echo '<h2>Detail of "'. $curr->name .'"</h2>';
            echo "
                <ul>
                    <li> date: <b>" . $curr->date .  "</b></li>
                    <li> name: <b>" . $curr->name .  "</b></li>
                    <li> importance: <b>" . $curr->importance .  "</b></li>
                    <li> text: <b>" . $curr->content .  "</b></li>
                </ul>
            ";
        }
        





        
    ?>
</body>
</html>