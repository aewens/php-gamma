<?php 

function render($path, $model) {
    require $model;
    
    $content = file_get_contents($path);
    $get_vars = preg_match_all("/\{\s([^\}]*)\s\}/", $content, $page_vars,
        PREG_PATTERN_ORDER);
    
    if (isset($model_vars)) {
        foreach ($page_vars[0] as $key => $value) {
            $content = str_replace($value, $model_vars[$page_vars[1][$key]], 
                $content);
        }
        
        return $content;
    } else {
        return $content;
    }
}

if (isset($_GET["p"])) {
    $page = preg_replace("/(\.*|\\|\/)*/", "", $_GET["p"]);
    $hasJS = file_exists("javascripts/" . $page . ".js");
    $hasCSS = file_exists("stylesheets/" . $page . ".css");
    $hasHTML = file_exists("partials/" . $page . ".html");
    $hasPHP = file_exists("models/" . $page . ".php");
    if ($hasJS && $hasCSS && $hasHTML) {
        $pageJS = $page;
        $pageCSS = $page;
        $pagePHP = "models/" . $page . ".php";
        $pageHTML = render("partials/" . $page . ".html", $pagePHP);
    } else {
        $pageJS = "main";
        $pageCSS = "main";
        $pageHTML = "";
    }
} else {
    $pageJS = "main";
    $pageCSS = "main";
    $pageHTML = "";
}

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Project Gamma</title>
    <link rel="stylesheet" 
        href="vendor/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" 
        href="stylesheets/<?php echo $pageCSS; ?>.css">
</head>
<body>
    <div id="app">
        <?php echo $pageHTML; ?>
    </div>
    <script src="vendor/jquery/dist/jquery.min.js"></script>
    <script src="vendor/underscore/underscore-min.js"></script>
    <script src="vendor/backbone/backbone-min.js"></script>
    <script src="vendor/requirejs/require.js" 
        data-main="javascripts/<?php echo $pageJS; ?>.js">
    </script>
</body>
</html>
