In this task you should do something pretty similar to the previous task. The only difference is that you won't be required to use the interpolation service and your binding will be two-way!!

Lets do it!

* Define new isolated scope by using the syntax for object literal. Define property of the object literal called `attr` and set '=' as its value.

Similarly to the previous case, if you want to bind to attribute with different name from the one of the property simply use `=differentName` syntax.

* Register new watched by using the scope of the directive. Watch the property `attr`. On change of the property just add `2` to `scope.attr`.

This way you won't change only the local property of the isolated scope but also the property of the outer scope!

Now we need only to wire the whole picture.

* Add attribute called `attr` to `my-dir`. The value of the attribute should be `counter`.

It is very essential to notice that we bind our local property to variable from the outer scope, which is named like the value of the attribute. Once you understand that concept you won't have problems with the isolated scopes at all!

The last remaining thing is to visualize the result:

* Set `elem.html(val)`.

You will notice how the value of `scope.attr` does not change with 1 each second. On regular intervals it jumps with few values. This happens because the watcher callback is invoked not just a single time but multiple times instead. Wonder why? You can think of `scope.attr` and `$scope.counter` (in the controller) like the same variables. When we change `scope.attr` we make change in `$scope.counter` as well. This triggers the watcher once again...and again...

So we are done! Lets go to the last step...
