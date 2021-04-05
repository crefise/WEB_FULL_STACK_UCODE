<?    
    session_start(); 
?>
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>t05</title>


</head>
<body>
    <h1>Parsing CSV data</h1>
    <?php

    $_SESSION['select'] = $_POST['select'];

    echo "Upload file:
    <form method='post'>
        <input type = 'file' name = 'file'>
        <button>
            Upload
        </button>
    </form>";
    if (isset($_POST['file'])) {
        $_SESSION["file"] = $_POST['file'];
        unset($_POST['file']);
    }


    if (isset($_SESSION["file"])) {

        $file = fopen($_SESSION["file"], 'r');
        $array_text = [];
        $head_text = fgetcsv($file);
        for ($i=fgetcsv($file); $i != null; $i=fgetcsv($file)) { 
            array_push($array_text, $i);
        }

        $filter = $_SESSION['filter'];
        foreach($head_text as $k) {
            if (isset($_POST[$k])) {
                $filter = $k;
                unset($_POST[$k]);
                break;
            }
        }
        if ($filter == null)
            $filter = $head_text[2];

        $_SESSION['filter'] = $filter;


        echo '<form method="post">';
        $filter_str = "<select name = 'select'><option>NOT SELECTED</option>";
        $temp = [];
        foreach($array_text as $k) {
            array_push($temp, $k[array_search($filter, $head_text)]);
        }
        $temp = array_unique($temp);
        foreach($temp as $k) {
            if ($_SESSION['select'] == $k) 
            $filter_str = $filter_str .'<option selected>' . $k . '</option>';
            else 
                $filter_str = $filter_str .'<option>' . $k . '</option>';
        }
        $filter_str = $filter_str . "</select>";
        echo "Filter: ";
        echo $filter_str; 
        echo '<button>APLY</button>';
        echo '</form>';


        // HEAD OUTPUT


        echo '<table>';
        $head_str = "<tr>";
        foreach($head_text as $elem) {
            $head_str = $head_str . '
                <form  method="post">
                    <td class = "table">
                        <button name = "'. $elem .'">' 
                            . $elem 
                        . "
                        </button>
                    </td>
                </form>";
        }
        $head_str = $head_str . "</tr>";
        echo $head_str;

        
        //

        $text_str = "";
        if (!$_POST['select'] || $_POST['select'] == "NOT SELECTED") {
            foreach($array_text as $elem) {
                $text_str = $text_str . "<tr>";
                foreach($elem as $k) {
                    $text_str = $text_str . '<td class = "table">'  . $k .  "</td>";
                }
                $text_str = $text_str . "</tr>";
            }
            echo $text_str;
        }
        else {
            foreach($array_text as $elem) {
                if ($_POST['select'] == $elem[array_search($_POST['select'], $elem)] && (array_search($_POST['select'], $elem) == array_search($filter, $head_text) ) ) {
                $text_str = $text_str . "<tr>";
                foreach($elem as $k) {
                    $text_str = $text_str . '<td class = "table">' . $k .  "</td>";
                }
                $text_str = $text_str . "</tr>";
            }
            }
            echo $text_str;
        }



        echo '</table>';

    }
    ?>
</body>

<style>
        .table {
            border: 1px black solid;
        }
    </style>
</html>