<?php

function getFileContent($filename) {
  $content = '';
  $fh = fopen($filename, 'r');
  while ($line = fgets($fh)) {
    $content .= $line;
  }
  fclose($fh);
  return $content;
}

?>
