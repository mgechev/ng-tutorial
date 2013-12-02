# Filters and two-way binding

This task is the longest one but since now we are almost profesionals with AngularJS it'll be like a piece of cake!
In this tutorial we will extend the functionality of the previous application. We will include functionality for adding new items, removing allready existing items and filtering them.

* Create new input field and add it the custom attribute: `ng-model` and set it a value `currentLanguage`.

`ng-model` creates two-way data binding between the input and the variable which is set as value of the attribute. This variable is property to one special component of AngularJS called scope. You can think of the scope as proxy between AngularJS' imperative JavaScript behind the scene and the declarative markup. Everything which is attached to the scope can be manipulated through the view associated with the given scope.

* Near the text input add a button with label `Add` and include the `ng-click` attribute. The value of this attribute is an expression which will be executed when the user click on this element. So as value of `ng-click` just append the `currentLanguage` variable to the end of the `languages` array (don't forget, AngularJS's expressions are a bit similar to JavaScript constructs so you can use well familiar methods). After that you can reset the value of `currentLanguage`. This will read to change of the value of the text input.

Now play with the application a bit! It is awesome, right! You can add new items to your array and you achieved all the current functionality by just adding some custom tags...AngularJS is amazing, I told you!

You may notice that if you have two items with the same value the application breaks. Don't worry! AngularJS handles this issue too but lets forget about it for a moment because we still don't have functionality for removing items.

* Inside the list element (the one where `ng-repeat` is located) add button with label `x`. This button will be responsible for removing items from your array. Remember that you have the index of the current language (`$index`), you can use well known JavaScript methods (let me give you a hint, you can use `splice`). Now add `ng-click` and just remove the current element from the array.

Even more awesome, right? But we still can enhant it! Now we will include filtering too!

* Add one more text input and use `ng-model` to bind its value to variable called `filterLanguage`.

In order to filter the items from the list use the Unix pipe syntax: `language in languages | filter: filterLanguage`. How simple is that?!

The semmantic behind this is that you apply filter called `filter` with parameter `filterLanguage` to the collection `languages`. Now when you type in the filtering text box the items of the unordered list will be automatically filtered for you.

Awesomness!