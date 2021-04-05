<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>t07</title>
</head>
<body>
<h1>Avenger Quote to XML</h1>

<?php
    function autoload($pClassName) {
        include(__DIR__. '/' . $pClassName. '.php');
    }
    spl_autoload_register("autoload");

    $avengerQuote1 = new AvengerQuote(1, " sfsdfses", "Hellsefseo", [
        "href1",
        "href2",
        "href3"
    ]);
    $avengerQuote1->addComment("Googrgdrd");
    $avengerQuote1->addComment("Comdrgdrgment");
    $avengerQuote1->addComment("Hdrgdrgdrgi!");

    $avengerQuote2 = new AvengerQuote(2, "Basefsefsef  essf seffnner", "Goose fsef sef efsed bye", [
        "ССЫЫлочка",
    ]);
    $avengerQuote2->addComment("Wooose BBooBBBBBBBsfesooooW");
    $avengerQuote2->addComment("MMMMMsefsefMMM");

    $avengerQuote3 = new AvengerQuote(3, "Tfsefsefsefseffsefsehseosefsefr sefse", "sefseIf fsefseesefsefksenosefsefw", [
        "ССЫЫлочка",
    ]);
    $avengerQuote3->addComment("Prrrrsef sef sefrrrrhfsefsefrulorem    lsfseorem    rrr");
    $avengerQuote3->addComment("bbb sef esfse brrrsef rrrrrrr");

    $avengerQuote4 = new AvengerQuote(3, "sefsefSEFS", "gigigiigigig", [
        "ССЫЫлочка",
    ]);
    $avengerQuote4->addComment("Gsefs");
    $avengerQuote4->addComment("Gвкпod ofsefsesefes");

    $listAvengerQuote = new ListAvengerQuotes();
    $listAvengerQuote->addAvengerQuote($avengerQuote1);
    $listAvengerQuote->addAvengerQuote($avengerQuote2);
    $listAvengerQuote->addAvengerQuote($avengerQuote3);
    $listAvengerQuote->addAvengerQuote($avengerQuote4);

    // work with xml
    $listAvengerQuote->toXML("file.xml");

    echo '<table border="1"><tr>';

    echo '<td><pre>'; 
    print_r($listAvengerQuote); 
    echo '</pre></td>';

    echo '<td><pre>'; 
    print_r($listAvengerQuote->fromXML("file.xml"));
    echo '</pre></td>';

    echo '</tr></table>';

?>

</body>
</html>