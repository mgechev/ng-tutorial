<?php

require_once 'config.php';
require_once 'utils.php';

function getTutorials() {
  return json_decode(getFileContent(Config::TUTORIALS . 'tutorials.json'));
}

function getTutorialStep($tutorialId, $stepId) {
  $task = getFileContent(Config::TUTORIALS . $tutorialId . '/steps/' . $stepId . '/task.md');
  $result = array('content' => $task);
  return $result;
}

?>
