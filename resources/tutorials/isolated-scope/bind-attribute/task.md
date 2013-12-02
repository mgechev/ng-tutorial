# Tutorial Overview

This tutorial describes the isolated scope used in directives. It is in intermediate level so you should have basic understanding of the following topics:

* Controllers
* Scope
* Templates
* Directives
* Data-binding

When you define new directive you can chose from few types of scope:

* reuse the parent scope
* create new scope which prototypicaly inherits from the parent scope
* create isolate scope

The isolate scope is absolutely independent. It does not inherit by the root scope so you cannot communicate with the outer world through `$on`, `$broadcast` and `$emit`. Anyway, it is extremely useful when you create reusable components.

* Define new isolated scope by using the syntax for object literal. Define property of the object literal called `attr` and set it value `@`.

By using this syntax you define that you want your scope property called `attr` to be binded (only one-way binding) to the value of the attribute called `attr`. You can bind it to another attribute by using this syntax: `@attrName`.

* Register new watched by usig the scope of the directive. Watch the property `attr` and in the watched set its new value as value of the `elem` (`elem.html(value)`).

You're almost done!

The only thing remaining is to add attribute to your directive!

* Add attribute called `attr` to the directive `my-dir`. Set its value to be `{{counter}}`.

Now you should see how the counter change its value each second! It is quite essential to use interpolation because otherwise the value of the `attr` attribute will be simply the string `"counter"`.

And you're done! Now lets smash the bind-property task!