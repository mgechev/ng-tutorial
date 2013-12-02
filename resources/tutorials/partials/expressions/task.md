# Writing expressions

AngularJS has built-in interpreter of expressions. These expressions look like JavaScript but have few noticeable differences, which you will discover in the next steps of this tutorial.

Now, lets start with our first step:

*. Inside the `div` in the HTML view include the expression: `'The answer is ' + (26 + 16)`. Note that in order AngularJS to compile it, it should be put inside a directive. For example, you can use the interpolation directive again.

Sometimes the interpolation service is not quite appropriate. You include expressions inside `{{expr}}` directly in your HTML content and they does not differ from ordinary text. If given expression requires some time-consuming background work in order to be evaluated (for example response from XHR) the user will see this `{{expr}}` and after the expression is evaluated the template will be turned into the actual result. This may lead to unnecessary blinking which will worse the user experience. You can handle this issue by applying the directive `ng-cloak` to the element, which contains the interpolation service. `ng-cloak` will hide the element until the expression is evaluated.

Usually better option is to use `ng-bind` instead. `ng-bind` is custom attribute (you can use it with `data-` prefix again, this applies to each AngularJS attribute directives), which accepts expression as content. AngularJS evaluates this expression and set it as content of the element. Note that the previous content of the element will be replaced with the result of the expression.

* Create new `span` element before closing the root tag of the application. Add `ng-bind` attribute to the `span` you just created. As content of the `ng-bind` attribute you should put the same expression as the one above.

After you complete this step the result should look like:

```
The answer is 42
The answer is 42
```
