# Writing expressions

AngularJS has built-in interpreter of expressions. These expressions look like JavaScript but has few differences which you will notice in the next steps of this tutorial.

Now lets start with our first step:

*. Inside the div in the HTML view include the expression: 'The answer is ' + (26 + 16). Note that in order AngularJS to compile it, it should be put inside a directive. You can use the interpolation directive again.

Sometimes the interpolation service is not quite appropriate. You include expressions inside `{{expr}}` directly in your HTML content. If some expressions require some background work in order to be evaluated (for example response from XHR) the user will see these `{{expr}}`. You can handle this issue by applying the directive `ng-clack` to the element which contains the interpolation service.

Usually better option is to use `ng-bind` instead. `ng-bind` is custom attribute (you can use it with `data-` prefix again, this applies for each AngularJS attribute directive) which accepts expression as content.
AngularJS evaluates this expression and set it as content of the element. Not that the previous content of the element will be replaced with the result of the expression.

* Create new `span` element before closing the root of the application. Add `ng-bind` attribute to the `span` you just created. As content you should put the same expression as the one above.

After you complete this step the result should look like:

```
The answer is 42
The answer is 42
```