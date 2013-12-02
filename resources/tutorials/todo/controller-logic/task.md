# Adding logic in the controller

In this part of the tutorial you should add logic into the controller. We will use some analogies from the first tutorial.

Since most of the tasks in this excercise were covered in the previous tutorial in this step you will have mostly tasks with not that much explanation.

Sooo...lets go!

* Add text input and create two-way binding between it and variable called `currentTodo`
* In the controller add method to the scope called: `addTodo`. When this method is invoked it should append `currentTodo` to the `todos` array and reset the value of `currentTodo` property. When this method is instance method of the scope it can be invoked in expressions defined in the view.
* Add button in the view with label "Add todo". On click of the button invoke the method `addTodo` defined in `TodoCtrl`.
* Define method `removeTodo(index)` in `TodoCtrl` and attach it to the scope.
* In the list item include button with label `x`. In similar way like in "Have fun with templates" tutorial add expression which removes the target todo from the `todos` list (notice - now you can use the method defined in the controller and attached to the scope so you don't need to have any additional logic in the template).
* Add one more text input and create two-way binding between its value and scope variable called `filterValue`. Based on the value of this variable filter the todo items in the `todos` array.

And now...we will look at something which is new to us. It is...wait for it...the `ng-class` directive! We will add special class to each item which is marked as completed but before we get involved with this task we should refactor our application a little bit.

Currently we don't have any indication which todo is completed and which is still pending. For dealing with this issue we need to change the way our todos are represented. Instead of array of strings `todos` can be changed it to array of objects. Each object will have two properties: `label` and `completed`.

This will lead to some changes in our template and `addTodo` method. Make sure you have took care of all required changes before going to the next subtask. Our filter will complare the items with the filter value based on the item's JSON representation so lets leave it that way for a moment.

* Add the following CSS class definition in your HTML:

```
<style>
.completed {
  text-decoration: line-through;
}
</style>
```

* Add the `ng-class` directive to your list items. The value of the `ng-class` directive is an expression which should return string or set of strings based on given condition. For example you can use the ternary operator: `(todo.completed) ? 'completed': ''`.

But we need a way to toggle the item completion...

* Add a checkbox in the list item which is two-way binded to the todo's completed value.

* One last step! As you remember we mentioned that your app might break if you have duplicates in the collection you iterate over with `ng-repeat`. To prevent this you can use: `track by $index` as suffix. This will tell the `ng-repeat` directive to not track the items in the collection by value but by their index instead.

Aaand it seems that we are done! When you click on the checkbox you should see line-through the associated item.