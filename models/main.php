<?php

$_cstrong = true;
$_rand = bin2hex(openssl_random_pseudo_bytes(64, $_cstrong));
$_id = hash("sha256", $_rand);
$_prefix = substr($_id, 0, 8);
$_pages = array_values(array_filter(scandir("models"), function($k) {
    return !preg_match("/^\.+/", $k);
}));
$_main = array(
    "rand" => $_rand,
    "id" => $_id,
    "prefix" => $_prefix,
    "pages" => array_map(function($file) {
        return str_replace(".php", "", $file);
    }, $_pages)
);

$model_vars = array(
    "mount" => json_encode($_main)
);
