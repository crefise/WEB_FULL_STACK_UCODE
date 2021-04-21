<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Main</title>
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>


    <div class = "main_div">
        <div class = "main_menu ">
            <div class = "player_info info_block">
                <div>
                    <img class = "user_avatar" src= <?php echo  $_SESSION['path_avatar'] ?>>
                </div>

                <div class = "label"> <?php echo $_SESSION['login'] ?> </div>
                <form action="/main" method="get">
                    <div>
                        <div>
                            <button class = "input button" name = "logout">logout</button>
                        </div>
                    </div>
                </from>
            </div>

            <div class = "find_game" >
                <h1>Play</h1>
                <div class = "fight_div">
                    <div class="fight_button_div">
                        <button name = "fight" class = "fight_button" id = "fight_solo"></button>
                    </div>
                </div>
            </div>
  
            <div class = "card_div">
                <?php 
                    require_once("./card.php");
                    foreach($cards as $k) {
                        echo $k->show_card_checkbox();
                    }
                ?>
            </div>
        </div>
    </div>
    
 


</body>
    <script src="/js/main_script.js"></script>
</html>