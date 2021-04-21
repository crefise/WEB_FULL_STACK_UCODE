<?php 
require_once("./card.php");
$used_card = unserialize($_SESSION['card']);
$my_card=[];
foreach($cards as $k) {
    foreach($used_card as $name) {
        if ($k->name == $name) {
            array_push($my_card, $k);
            break;
        }
    }

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/fight.css">
</head>
<body>
    <div class = "menu_buttom" id = "menu_button_html"><button>Menu</button></div>
    <div class = "menu"> 
        <div style = "color:white">Pause only works with bot</div>
        <div class = "menu_line"><button class = "button input" type="button" id = "resume_button_html">Resume</button></div>
        <div class = "menu_line find_oponent"><input placeholder="Player id" class = "input"><button type="button" class = "button input">Find oponent</button></div>
        <div class = "menu_line"><button class = "button input" type="button" id = "play_bot_button_html">Play with bot</button></div>
        <div class = "menu_line" id = "mach_info_html"><button class = "button input" type="button">Mach info</button></div>
        <form action="/main" method="post">
            <div class = "menu_line"><button class = "button input" type="submit">Back to menu</button></div>
        </form>
    </div>
    <div class = "main_div">
    <?php 
        foreach($my_card as $k) {
            echo $k->show_card_battle();
        }
    ?>
        <h1><span id="player_hp"></span> HP | <span id = "player_souls"></span> soul(s) <button id = "button_player_skip_html">Skip</button></h1>
    </div>

    <div class = "time_box">
                <h1>Left time <span id = time_counter_html></span> second</h1>
    </div>
    <div class = "status_box" id = "status_box_html">
                <h1><?php echo $_SESSION['login'] ?> vs Bot</h1>
    </div>


    <div class = "win_box" id = "win_box_html">
    <span class = "end_text"><span id = "player_name_html">Bot</span> won!</span>
        <div><button class = "input button end" id = "win_retry_button">Retry</button></div>
        <div><button class = "input button end" id = "win_menu_button">Back to menu</button></div>
    </div>

        <div id = "math_info_html_alone" class = "math_info">
            <div id= "player">
                <div class = "name_player"><span id = "our_name"><?php echo $_SESSION['login']; ?></span></div>
                <div class ="player_div"><img src="<?php echo $_SESSION['path_avatar'] ?>"></div>
            </div>
            <div class = "vs_text">VS<br>
                <button id = "close_html">close</button>
            </div>
            <div id= "player">
                <div class = "name_player"><span id = "enemy_name"><?php echo $_SESSION['login']; ?></span></div>
                <div class ="player_div"><img src="<?php echo $_SESSION['path_avatar'] ?>"></div>
            </div>
        </div>


    

    <div class = "main_div_enemy">
    <h1><span id = "enemy_hp"></span> HP | <span id = "enemy_souls"></span> soul(s) <button id = "button_enemy_skip_html">Skip</button></h1>
        <div class = "card_enemy" name="test" attack="2" defense="1" cost="1">
            <button class = "card_button"><img src="/css/images/card/chitauri.png" class = "card_img_enemy"></button>
        </div>

        <div class = "card_enemy" name="test" attack="2" defense="1" cost="2">
            <button class = "card_button"><img src="/css/images/card/zemo.png" class = "card_img_enemy"></button>
        </div>

        <div class = "card_enemy" name="test" attack="4" defense="2" cost="3">
            <button class = "card_button"><img src="/css/images/card/altron.png" class = "card_img_enemy"></button>
        </div>

        <div class = "card_enemy" name="test" attack="4" defense="3" cost="4">
            <button class = "card_button"><img src="/css/images/card/loki.png" class = "card_img_enemy"></button>
        </div>
        
        <div class = "card_enemy" name="test" attack="6" defense="5" cost="6">
            <button class = "card_button"><img src="/css/images/card/thanos.png" class = "card_img_enemy"></button>
        </div>
    </div>

</body>
    <script src="/js/battle_script.js"></script>
</html>