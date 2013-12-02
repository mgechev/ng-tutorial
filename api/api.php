<?php

require_once 'tutorials.php';
require_once 'code_loader.php';

$action = $_POST['action'];

switch ($action) {
  case 'get_tutorials':
    $response = getTutorials();
  break;
  case 'get_step':
    $response = getTutorialStep($_POST['tutorial_id'], $_POST['step_id']);
  break;
  case 'get_step_source':
    $response = getStepSource($_POST['tutorial_id']);
  break;
  case 'refresh':
    echo getPageSource($_POST['html'], $_POST['js']);
  break;
}

if (isset($response)) {
  echo renderResponse($action, array('data' => $response));
}

function renderResponse($action, $response) {
  $response['action'] = $action;
  return json_encode($response);
}

?>