# Iteration

This step will introduce you two more AngularJS directives: `ng-init` and `ng-repeat`.

`ng-init` is used for running expressions which are required for initialization. Usually inside the expression of `ng-init` are initialized variables. Prefered way to do this is by using controllers but for the goals of this tutorial we will use `ng-init`.

* Use ng-init for initializing array called `languages`. The syntax for initializing the variable is the same as the one in JavaScript instead that you don't need `var` (the initialized variable won't became global (property of window) don't worry). Give `languages` the value:

```
['JavaScript', 'Go', 'Python', 'Perl', 'Java']
```

Add `ng-init` to the root of your application.

* Now inside the markup of your application include unordered list and a single list item inside it. In the list item add custom attribute called `ng-repeat`. `ng-repeat` accepts expression as value, once again. Using `ng-repeat` you can iterate through each item inside your collection by using the following syntax: `item in collection`. After that you will have direct reference to the current item (by the `item` variable) and to the index of the item (`$index` variable).

* Using the interpolation service place expression inside the content of the list item element which builds string in the following format: `language is number $index`.

And thats it! Now you can do some of the most common tasks in SPA!