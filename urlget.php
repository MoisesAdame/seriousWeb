<?php
if(isset($_GET['url'])){
    echo file_get_contents("http://".SanitizeString($_POST['url']))
}

// Fuction that impedes unwanted commands to be used.
function SanitizeString($var){
    $var = strip_tags($var);
    $var = htmlentities($val);
    
    return stripslashes($var);
}
?>