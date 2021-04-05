<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>t08</title>
    <style>
        pre {
            border-bottom: 1px black solid;
            padding-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Show other sites</h1>
    <form method="POST">
        <input placeholder="url" name = "url">
        <button>GO</button>
        <a href="?back=">BACK</a>
    </form>
    
<?

    if (isset($_GET['back'])) {
        unset($_POST);

        echo '<script>location.replace("index.php");</script>';
    }
    if (isset($_POST['url'])) {
        $str = file_get_contents($_POST['url'], "r");

        $str = substr($str, strpos($str, "<body"), strpos($str, "</body>") - strpos($str, "<body") + 7);
        $str = nl2br($str);
        $str = str_replace("<", "&lt;", $str);
        $str = str_replace(">", "&gt;", $str);
      
        echo "<pre>url:" . $_POST['url'] . "</pre>";
        echo "<pre>" . $str . "</pre>";
    }
    else {
        echo "Type an URL...";
    }
?>
</body>
</html>