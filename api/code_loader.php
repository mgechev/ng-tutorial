<?php
require_once '../vendor/mustache/mustache/src/Mustache/Autoloader.php';
require_once 'config.php';
require_once 'utils.php';

Mustache_Autoloader::register();

function getPageSource($html, $js) {
  $m = new Mustache_Engine(
  array(
    'escape' => function ($value) {
      return $value;
    }
  ));
  $filename = Config::RESOURCES . 'template.tpl';
  $template = getFileContent($filename);
  return $m->render($template, array('js' => $js, 'html' => $html));
}

?>