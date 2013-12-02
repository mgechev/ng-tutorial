# Filters and two-way binding

This task is the longest one but since now we are almost professionals with AngularJS it'll be like a piece of cake!
In this tutorial we will extend the functionality of the previous application. We will include functionality for adding new items, removing already existing items and filtering them.

* Create new input field and add it custom attribute called `ng-model`. Set `currentLanguage` as value of the attribute.

`ng-model` creates two-way data binding between the input value and the variable, which is set as value of the attribute. This means that if the value of the input changes this will affect the value of the variable we associated with this input field, if the variable's value change this will affect the value of the input field. The variable is property of one special component of AngularJS called scope. You can think of the scope as proxy between AngularJS' imperative JavaScript behind the scene and the declarative markup. Everything, which is attached to the scope, can be manipulated through the view associated with the given scope.

* Near the text input add a button with label `Add` and include the `ng-click` attribute. The value of this attribute is an expression which will be executed when the user click on the button element. As value of `ng-click` set an expression, which appends the `currentLanguage` variable to the end of the `languages` array (don't forget, AngularJS's expressions are a bit similar to JavaScript constructs so you can use well familiar methods). After that you can reset the value of `currentLanguage`. This will affect the value of the input field as well (we have two-way data binding).

Now play with the application a bit! It is awesome, right! You can add new items to your array and you achieved all the current functionality just by writing some HTML...AngularJS is amazing, I told you!

You may already notice that if you have two items with the same value the application breaks. Don't worry! AngularJS handles this issue but lets forget about it for a moment. Lets introduce the functionality for removing items.

* Inside the list element (the one where `ng-repeat` is located) add button with label `x`. This button will be responsible for removing items from your array. Remember that you have the index of the current language (`$index`), you can use well known JavaScript methods (let me give you a hint, you can use `splice`). Now add `ng-click` and just remove the current element from the array.

It looks great, simple and functional! But we can improve it even more! Now we will include filtering too!

* Add one more text input and use `ng-model` to bind its value to variable called `filterLanguage`.

In order to filter the items from the list use the Unix piping syntax: `language in languages | filter: filterLanguage`. How simple is that?!

And there is simple semantic behind this. You apply filter called `filter` with parameter `filterLanguage` to the collection `languages`. Now when you type in the filtering text box and the items of the unordered list will be automatically filtered for you.

Awesomness!