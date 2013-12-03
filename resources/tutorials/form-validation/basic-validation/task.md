# Tutorial overview

In this set of mini-tutorials you'll understand how you can use the built-in form validation features of AngularJS.
The first two tutorials won't include any JavaScript at all! You will add form validation with only markup!

* Near the `User` label add new input of type text and name it `"username"`
* Add one more input for the email. In order to tell to AngularJS that you need email validation set the type of the input email.
* Near the password label add one more input of type password.

Name the inputs respectively email and password.

Now here comes the fun part! You need to tell to AngularJS that these inputs should be validated.

* Since the validation directives of AngularJS use internally the controller of `ng-model` you need to add `ng-model` to each input. Set the value of the `ng-model` to be the same as the name of the inputs.

There are only three steps left!

* We don't want the default form validation beahaviour from HTML5 so just add attribute `novalidate` to the form element.

We want to validate the inputs in the following way:

* The username field should accept strings between 3-15 symbols
* The email field should acept only email addresses
* The password should containing at least 8 characters, 1 number, 1 upper and 1 lowercase
* The username and the password are required

* To the username input add attributes called `ng-minlength` and `ng-maxlength`. Set values of these attributes respectively 3 and 15.
* Leave the email input that way. AngularJS knows that you may need email validation when the input type is email.
* To the password input add attribute called `ng-pattern` and set its value to `/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/`.
* To the username and password inputs add attribute called `required`.

Now everything works great but you just cant notice :-).

Type the text `fo` in the username input and inspect it with the element inspector tool of your browser. You will notice that the elemnt has the following classes:

* ng-valid-maxlength
* ng-dirty
* ng-invalid
* ng-invalid-minlength

Now type `foo`. The classes changed to:

* ng-valid-maxlength
* ng-dirty
* ng-valid
* ng-valid-minlength

Awesome, right? `ng-dirty` means that you've already interracted with the input by changing its value. `ng-invalid-minlength` and `ng-valid-maxlength` means respectively that the value of the input does not has enough characters and that the characters count are bellow the maximum characters count (15).

Now in order to take advantage of the AngularJS built in validation we can add the following CSS:

```
<style>
input.ng-invalid {
  background-color: #FFCFCF;
}
</style>
```

Now lets add some validation messages!