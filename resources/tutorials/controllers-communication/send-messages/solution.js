function ParentCtrl($scope) {
  $scope.$on('child-message', function (evnt, data) {
    alert('ParentCtrl alerts ' + data);
  });
  $scope.invokeChild = function (value) {
    $scope.$broadcast('parent-message', value);
  };
}

function ChildCtrl($scope) {
  $scope.$on('parent-message', function (evnt, data) {
    alert('ChildCtrl alerts ' + data);
  });
  $scope.invokeParent = function (value) {
    $scope.$emit('child-message', value);
  };
}