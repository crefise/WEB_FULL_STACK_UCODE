<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Make square image</title>

    <style>
    .main_div {
    margin: auto;
    width: 40%;
    padding: 10px;
    text-align: center;
    }

    img {
        width: 100%;
    }

    .row {
        display: flex;
    }

    </style>
</head>
<body>

<div class="main_div">
    <h1>Make square image</h1>
    <form method="post">
        <input  size="50" name="url" placeholder="Image url..." ><br><br>
        <input type="submit" value="GO">
    </form>
</div>
<?php
    function getExtencion($url) {
        return(array_pop(explode(".", $url)));
    }
    function cut_image($image) {
        if (imagesx($image) > imagesy($image)) {
            $image = imagecrop(
                $image,
                array(
                    "x" => (imagesx($image) - imagesy($image)) / 2,
                    "y" => 0,
                    "width" => imagesy($image),
                    "height" => imagesy($image)
                )
            );
        }
        else {
            $image = imagecrop(
                $image,
                array(
                    "x" => 0,
                    "y" => (imagesy($image) - imagesx($image)) / 2,
                    "width" => imagesx($image),
                    "height" => imagesx($image)
                )
            );
        }
        return $image;
    }
    if ($_POST['url']) {
        if (getExtencion($_POST['url']) == "png") {
            $first_image = imagecreatefrompng($_POST['url']);
            $second_image = imagecreatefrompng($_POST['url']);
            $third_image = imagecreatefrompng($_POST['url']);
            $fourth_image = imagecreatefrompng($_POST['url']);

            $first_image = cut_image($first_image);
            $second_image = cut_image($second_image);
            $third_image = cut_image($third_image);
            $fourth_image = cut_image($fourth_image);

            imagefilter($second_image, IMG_FILTER_COLORIZE, 256, 0, 0);
            imagefilter($third_image, IMG_FILTER_COLORIZE, 0, 256, 0);
            imagefilter($fourth_image, IMG_FILTER_COLORIZE, 0, 0, 256);

            imagepng($first_image, fopen("first_image.png", 'w'));
            imagepng($second_image, fopen("second_image.png", 'w'));
            imagepng($third_image, fopen("third_image.png", 'w'));
            imagepng($fourth_image, fopen("fourth_image.png", 'w'));
        }
        if (getExtencion($_POST['url']) == "jpg") {
            $first_image = imagecreatefromjpeg($_POST['url']);
            $second_image = imagecreatefromjpeg($_POST['url']);
            $third_image = imagecreatefromjpeg($_POST['url']);
            $fourth_image = imagecreatefromjpeg($_POST['url']);

            $first_image = cut_image($first_image);
            $second_image = cut_image($second_image);
            $third_image = cut_image($third_image);
            $fourth_image = cut_image($fourth_image);

            imagefilter($second_image, IMG_FILTER_COLORIZE, 256, 0, 0);
            imagefilter($third_image, IMG_FILTER_COLORIZE, 0, 256, 0);
            imagefilter($fourth_image, IMG_FILTER_COLORIZE, 0, 0, 256);

            imagejpeg($first_image, fopen("first_image.jpg", 'w'));
            imagejpeg($second_image, fopen("second_image.jpg", 'w'));
            imagejpeg($third_image, fopen("third_image.jpg", 'w'));
            imagejpeg($fourth_image, fopen("fourth_image.jpg", 'w'));
        }
        if (getExtencion($_POST['url']) == "jpeg") {
            $first_image = imagecreatefromjpeg($_POST['url']);
            $second_image = imagecreatefromjpeg($_POST['url']);
            $third_image = imagecreatefromjpeg($_POST['url']);
            $fourth_image = imagecreatefromjpeg($_POST['url']);

            $first_image = cut_image($first_image);
            $second_image = cut_image($second_image);
            $third_image = cut_image($third_image);
            $fourth_image = cut_image($fourth_image);

            imagefilter($second_image, IMG_FILTER_COLORIZE, 256, 0, 0);
            imagefilter($third_image, IMG_FILTER_COLORIZE, 0, 256, 0);
            imagefilter($fourth_image, IMG_FILTER_COLORIZE, 0, 0, 256);

            imagejpeg($first_image, fopen("first_image.jpeg", 'w'));
            imagejpeg($second_image, fopen("second_image.jpeg", 'w'));
            imagejpeg($third_image, fopen("third_image.jpeg", 'w'));
            imagejpeg($fourth_image, fopen("fourth_image.jpeg", 'w'));
        }
        

    }

    if ($_POST['url']) {
        $extencion = getExtencion($_POST["url"]);
        echo '<div class="row">';
            echo '<div class="column">';
                echo "<img src='first_image.".$extencion."'>";
            echo '</div>';
            echo '<div class="column">';
                    echo "<img src='second_image." . $extencion . "'>";
            echo '</div>';
        echo '</div>';
        echo '<div class="row">';
            echo '<div class="column">';
                echo "<img src='third_image.".$extencion."'>";
            echo '</div>';
            echo '<div class="column">';    
                echo "<img src='fourth_image.".$extencion."'>";
            echo '</div>';
        echo '</div>';
    }




?>
    
</body>
</html>

