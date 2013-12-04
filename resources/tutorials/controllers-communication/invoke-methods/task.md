# Tutorial overview

In this tutorial you will see how your controllers can communicate with each other. Basically here are introduced two ways of communication. In this step you will see how controllers can communicate by invoking messages. In the second step you will see how controllers can communicate by dispatching events.

As you see in our template we have two `ng-controller` directives. The first one is on a `div` element and its value is `ParentCtrl`. The second `ng-controller` directive is inside nested `div` and is with value `ChildCtrl`. For each `ng-controller` directive AngularJS creates new scope, which inherits from the parent scope prototypically.

Now, because of `ng-app` we have `$rootScope`, after that the first `ng-controller` directive creates new scope which inherits from the `$rootScope`. The second `ng-controller` directive once again creates new scope, which inherits from the previous one.

The child scope can invoke methods from the parent scope quite easily:

* Inside `ParentCtrl` add new method to the `$scope` called `parentAlert(value)`. This method should alert its only argument.
* Inside `ChildCtrl` add new method to the `$scope` called `delegateToParent(value)`. Inside this method you should call `$scope.parentAlert(value)`.
* Add `ng-click` directive with expression `delegateToParent(value)` to the button.

Now our controllers already communicate with each other! `ChildCtrl` is able to invoke methods from its "parent controller". When you invoke `$scope.parentAlert(value)` JavaScript will check for `parentAlert` method inside your current scope. If it doesn't find such method it will look in the prototype of your current scope and will find it there.

But what happens if you have defined method called `parentAlert` in your child scope? In such case you can call `$scope.$parent.parentAlert(value)`, awesome, right?

Unfortunately we are not able to directly invoke methods attached to the child scope from `ParentCtrl`. You will see how to deal with this issue in the next tutorial!