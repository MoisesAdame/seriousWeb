<?php
if(isset($_POST['url'])){
    echo file_get_contents('http://' . SanitizeString($_POST['url']))
}

// Fuction that impedes unwanted commands to be used.
function SanitizeString($var){
    $var = strip_tags($var);
    $var = htmlentities($val);
    $var = stripslashes($var);

    return $var;
}
?>