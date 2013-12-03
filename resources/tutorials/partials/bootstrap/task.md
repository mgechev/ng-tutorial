# Tutorial Overview

In this tutorial you will be introduced to the most basic concepts of AngularJS. You will be able to play with the templates, which AngularJS uses!

Let's go!

# Bootstrap

In order to point to AngularJS which part of the DOM should be compiled and used as AngularJS application you need to add a custom attribute to the element which will be root of the application.

* Create new `div` element and add `ng-app` attribute to it.

Congrats! Now you have running AngularJS application. To make sure your application works fine include the following content inside the `div` element you just created: `{{'foo'}}`. You should see the text `foo` in the result box without the brackets.

What AngularJS does is traversing all successors of the root element you just pointed with `ng-app`. When AngularJS' compiler finds something it recognizes, it compiles it following the compiler's internal logic.

I’m sure you noticed that `ng-app` is a custom attribute; it is not part of the HTML5 specification so the markup you just wrote won't be valid. In order to make it valid you can use the `data-` prefix. We will call these custom attributes **directives**. You can include directives inside your markup using - elements, classes, attributes, comments. But lets return to our bootstrap process.

* Change the attribute value to `data-ng-app`.

The result box should look the same after the change.

Sometimes you need to do some extra work before initialize your AngularJS application. In such cases you can use the manual bootstrapping process.

* Remove the `ng-app` attribute and set it id with value `foo`. Invoke the method `.bootstrap` of the AngularJS global object - `angular` with first argument the root element of your application and second element empty array. You can use jQuery's CSS selector since jQuery is included in the page.

The array defines the modules, which are required for bootstrapping your application. Since they are not required in the current case we can use an empty array.
In AngularJS modules play quite important role. You can think of them as containers, which group all logically, connected components in your application. Currently AngularJS does not provide lazy loading of modules from external files so their functionality is not that complete.

## And that's it! You're done with your first step of the initial tutorial!
