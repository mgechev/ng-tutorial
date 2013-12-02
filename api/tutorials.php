<?php

require_once 'config.php';
require_once 'utils.php';

function getTutorials() {
  return json_decode(getFileContent(Config::TUTORIALS . 'tutorials.json'));
}

function getTutorialStep($tutorialId, $stepId) {
  $task = getFileContent(Config::TUTORIALS . $tutorialId . '/' . $stepId . '/task.md');
  $js = getFileContent(Config::TUTORIALS . $tutorialId . '/' . $stepId . '/bootstrap.js');
  $html = getFileContent(Config::TUTORIALS . $tutorialId . '/' . $stepId . '/bootstrap.html');
  return array('task' => $task, 'js' => $js, 'html' => $html);
}

function getStepSolution($tutorialId, $stepId) {
  $path = Config::TUTORIALS . $tutorialId . '/' . $stepId;
  $js = getFileContent($path . '/solution.js');
  $html = getFileContent($path . '/solution.html');
  $result = array('js' => $js, 'html' => $html);
  return $result;
}

?>
