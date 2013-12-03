Now lets get started with this step! The scope in AngularJS can be used for handling events from the view, referencing to the model and emitting events.
In some cases we can think of the scope like an event bus.

There are three methods of the scope, which can me used for handling and triggering events:

* `$on(event, callbac)` - attach `callback` to event named `event`. `callback` will be invoked when the given event happens.
* `$emit(event, data)` - triggers new event along the scope hierarchy. Only the ancestors of the given scope will receive the event
* `$broadcast(event, data)` - triggers new event along the scope hierarchy. Only the successors of the scope will receive the event.

* Use the scope of the parent controller to handle `child-message` events. Inside the callback alert the string `"ParentCtrl alerts" + value`, where value is the received data. The received data is the second argument of the callback.
* Use the scope of the child controller to handle `parent-message` events. Inside the callback alert the string `"ChildCtrl alerts" + value`, where value is the received data.

How simple is that? Now we should trigger these events:

* Inside `invokeChild` broadcast new `parent-message` event. As second argument of `$boradcast` add the argument of `invokeChild`.
* Inside `invokeParent` emit new `parent-message` event. As second argument of `$emit` add the argument of `invokeParent`.

Now we only need to wire all together!

* To the button with label `"Send message to ChildCtrl"` add `ng-click` directive with the expression: `invokeChild(parentValue)`
* To the button with label `"Send message to ParentCtrl"` add `ng-click` directive with the expression: `invokeParent(childValue)`.

And that's it! Now you can type text in the text boxes and play with the buttons to test the result!
