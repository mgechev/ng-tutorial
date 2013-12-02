function TodoCtrl($scope) {
  $scope.todos = [];
  $scope.addTodo = function () {
    $scope.todos.push({ label: $scope.currentTodo, completed: false });
    $scope.currentTodo = undefined;
  };
  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
  }
}