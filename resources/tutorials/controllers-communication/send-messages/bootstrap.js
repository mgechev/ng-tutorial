function ParentCtrl($scope) {
  $scope.invokeChild = function (value) {
    //body
  };
}

function ChildCtrl($scope) {
  $scope.invokeParent = function (value) {
    //body
  };
}