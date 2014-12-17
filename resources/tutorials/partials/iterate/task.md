# Iteration

This step will introduce you to two more AngularJS directives: `ng-init` and `ng-repeat`.

`ng-init` is used for running expressions which are required for initialization. Usually inside the expression of `ng-init` are initialized variables. The prefered way to do this is by using controllers but for the sake of this tutorial we will use `ng-init`.

* Use ng-init to initialize an array called `languages`. The syntax for initializing the variable is the same that used in JavaScript except you don't need `var` (the initialized variable won't become global (property of window) don't worry). Give `languages` the value:

```
['JavaScript', 'Go', 'Python', 'Perl', 'Java']
```

Add `ng-init` to the root of your application.

* Now inside the markup of your application include an unordered list and a single list item inside it. In the list item add a custom attribute called `ng-repeat`. `ng-repeat` accepts an expression as its value, once again. Using `ng-repeat` you can iterate through each item inside your collection using the following syntax: `item in collection`. After that, you will have a direct reference to the current item (by the `item` variable) and to the index of the item (`$index` variable).

* Using the interpolation service, place an expression inside the content of the list item element, building a string with the following format: `language is number $index`.

And thats it! Now you can do some of the most common tasks in SPA!
