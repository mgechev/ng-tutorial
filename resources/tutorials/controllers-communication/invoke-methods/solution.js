function ParentCtrl($scope) {
  $scope.parentAlert = function (value) {
    alert(value);
  };
}

function ChildCtrl($scope) {
  $scope.delegateToParent = function (value) {
    $scope.parentAlert(value);
  };
}