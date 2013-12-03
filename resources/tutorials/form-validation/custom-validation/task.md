Now we will create directive for custom validation. We will develop it the same way AngularJS team have developed the validation directives I introduced you in the previous steps.

Our directive will validate the input only if its value does not occur in `dictionary`.

* In order to reuse most of the validation functionality provided by AngularJS you should `require` the `ngModel` directive inside the password directive.

By requiring this directive you will have direct access to its controller, it will be passed as fourth parameter of the link function.

* Add fourth parameter of the link function named controller.

* Just after the definition of the `dictionary` array define function called `isValid(value)`. It should return true if the `value` does not exist in the `dictionary`.

Using the controller you can include new parser. Just a quick reminder: parsers are used to validate the value of the input!
Your parser should be a function. The returned by the parser value will be set as value of the scope property referenced by `ng-model` (`password` in our case).

By convention if the value of the input is not valid the parser should return `undefined`.

* Add new parser in the beginning of the `controller.$parsers` array. The first argument of the parser is the value of the input. The parser should return `undefined` if the value is not valid according to `isValid` function, and the input value if `isValid` returns true.

* Before returning the value makes sure you've set the validity of the input. You can do this by using `controller.$setValidity`. The first argument of `$setValidity` is the name of the parser (for example `password` in our case) and the second argument is boolean value which indicates the validity of the input.

And the last step!

* Add `password` attribute to the input in the HTML section. Now test the result!

When you type `foo` the input background should became red. If the value you've typed does not exist in the `dictionary` array the background should stay white.

And that’s all! Fin!