# Tutorial Overview

In this tutorial we will make similar application like the one describe in "Have fun with templates" but using better approach.
We will create TODO list with the following functionality:

* Visualize a list of TODO items
* Add new TODO items to the list
* Remove TODO items from the list
* Complete items
* Filter items
* Save the items in localStorage through custom service

While completing the functionality above you will became familiar with the following concepts:

* Using scope
* Defining constructors
* Dependency injection
* Defining services (using factory)
* Using filters and templates

So lets begin!

# Define constructor

Since you are already familiar with the process of bootstrapping described in the tutorial "Have fun with templates" in this step you have pre-defined template.

* Define JavaScript function called `TodoCtrl`, it should be global function accepting a single argument named `$scope`.

Using controllers as global functions is usually a bad practice (always a bad practice). We will use this way of defining controllers only for the current example in order to keep it simple. Remeber, when developing application which will be launched in production use the module syntax, it will be described in later tutorials.

It is very important to name the argument of `TodoCtrl` - `$scope`. AngularJS uses reflection to find the names of the arguments of `TodoCtrl` and tries to find components which are already registered with the same names.

## What is $scope

The scope is a JavaScript object. In the controllers we add properties and methods to it. The properties are called models (may be better terminology is view-model). For each controller new scope will be created. This scope will inherit from the `$rootScope` or any ancestor of the `$rootScope`. The used inheritance is the standard prototypal JavaScript inheritance, so nothing new here. The most important concepts of the `$scope` is that it links our model with the view. We can invoke methods of the scope and emit/broadcast messages through the scope hierarchy.

* Add model. In `TodoCtrl` you can add model by adding a property to its scope. For example, in the body of `TodoCtrl` add array property to `$scope` called `todos` and add few elements to the array.

**And now the magic happened! The view is populated with the items in the array you just added to the scope!** Now you might have basic understanding what we did in "Have fun with templates" by invoking `ng-init`. Invoking `ng-init` with expression, which initialize given variable actually creates new property of the scope associated with the DOM element, where `ng-init` was added, with value - the value of the variable. This might sounds a bit confusing but here what actually happens:

```
function TodoCtrl($scope) {
  $scope.todos = ['Item1', 'Item2'];
}
```

```
<div ng-init="todos = ['Item1', 'Item2']"></div>
```

Both snippets above are almost equivalent.

The last step you need to accomplish is:

* Add attribute `ng-controller` to the root element of your application. The value of `ng-controller` should be string which is with value the name of the controller you want to associate with the DOM sub-tree.

Now lets go to step 2!