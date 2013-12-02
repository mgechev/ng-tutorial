var TodoApp = angular.module('todoApp', []);

TodoApp.factory('LocalStorage', function () {
  var storageKey = 'todoApp',
      data = JSON.parse(localStorage.getItem(storageKey)) || {};
  return {
    getItem: function (key) {
      return data[key];
    },
    setItem: function (key, value) {
      data[key] = value;
      localStorage.setItem(storageKey, JSON.stringify(data));
    },
    removeItem: function (key) {
      data[key] = undefined;
      localStorage.setItem(storageKey, JSON.stringify(data));
    }
  };
});

function TodoCtrl($scope, LocalStorage) {
  $scope.todos = LocalStorage.getItem('todos') || [];
  $scope.addTodo = function () {
    $scope.todos.push({ label: $scope.currentTodo, completed: false });
    $scope.currentTodo = undefined;
    LocalStorage.setItem('todos', $scope.todos);
  };
  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
    LocalStorage.setItem('todos', $scope.todos);
  }
}