In this step of the tutorial we will add error messages. We will do this without writing any JavaScript again!

When AngularJS finds form in your DOM tree and this form has a name it creates new property of the current scope which is named like the form. But thats not all! AngularJS also traverse the DOM subtree i.e. all form ancestors and for each named input it creates new property of the form property.

It probably sounds a bit confising but it is not at all! Here is what basically happens when we add name (`myForm`) to our form:

```
myForm
	email
	password
	username
```

Each of the properties email, password and username has their own properties. Some of them are:

```
$dirty:
$error
$invalid
$valid
$name
$parsers
$pristine
$setPristine
$setValidity
$setValidity
$setViewValue
```

Some of the most important once are

* `$dirty` and `$pristine` - boolean property which shows whether we have used the control
* `$invalid` and `$valid` - shows whether the value of the control is valid according to the `$parsers`
* `$parsers` - a set of functions which are responsible for validating the result

We also have getters and setters of these properties but lets stop here.

* Now set name of your form. Name it `myForm`. It is absolutely required your form and inputs which you want to validate to be named!

The only thing left is to show/hide the error messages based on the validity of the inputs' value.

* Add `ng-show` attributes to all `div` elements with class `error-message`. As value of the element set `myForm.inputName.$invalid`.

Note:

* In the username and password inputs you may have more than one error and you don't want to show them at once. To fix this use the `$error` property instead of `$invalid`. The error property contais boolean properties for each validation types i.e. if the username input field contains the string `fo` the value of the `error` properti will be: `{ minlength: true, maxlength: false, required: false }`.
* By default `myForm.inputname.$error.required` is `true`, you need to include check whether the input is `$pristine` in the `ng-show` condition.