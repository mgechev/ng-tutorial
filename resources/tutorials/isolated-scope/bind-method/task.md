And the last step of the isolated scope tutorial!

Imagine in your directive you have an isolated scope but you want to evaluate an expression in the context of the outer scope. The task doesn't seems trivial at all. Anyway, AngularJS provides solution to this.

* Define new isolated scope by using the syntax for object literal. Define property of the object literal called `method` and set '&' as its value.

Again you can bind to property with different name by using `&differentName`.

* Set this string as template of your direcrive `<button ng-click="method()">Call foo</button>`. As you see it invokes the isolated scope property called `method`

Now we should make the connection between our `method` property and the outer scope i.e. we should make sure that `method` is really a method!

* Add attribute named `method` of the `my-dir` directive. Set its value to `alertMe()`.

This way you connect your local property (`method`) with the method `alertMe` from the outer scope.

Now each time you click on the button `alertMe` will be invoked.


And...thats it! You're now familiar with the basics of the isolated scope.