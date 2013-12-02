# ng-tutorial

**ng-tutorial** is interactive tutorial for AngularJS. It contains tutorials in different topics labeled by their complexity (beginners, intermediate, advanced). Basically ng-tutorial gives you a task and allows you to complete the task online. If you have difficulties of completing any of the steps for given task you can view its source code.

#How to contribute

If you find a way to improve the application you can contribute by forking it and make pull request with your changes.
Currently the most necessary contributions are adding new tutorials. Adding new tutorial is quite simple. All tutorials are located in `./resources/tutorials`. In order to create new tutorial you should create new folder with unique name in the tutorials folder. In this folder you can add all the steps and the requirements for accomplishing them. For each step you should create different folder with custom name (its better to chose name which provides basic idea what the task is about). Inside the step you should have the following files:

* task.md - description of the current task in markdown format
* solution.js - file which contains the JavaScript required for the solution of the step
* solution.html - file which contains the HTML required for the solution of the step
* *bootstrap.js* - file which contains the JavaScript which bootstraps the step (initial source code)
* *bootstrap.html* - file which contains the HTML which bootstraps the step (initial source code)

Last two files are not required.

If you want to include communication with RESTful service, routing or another task which requires additional files inside your tutorial you can put them in folder named `resources` inside tutorial folder.

The last step for adding new tutorial is to include it in the JSON array inside `./resources/tutorials.json`. The information should be in the following format:

```JSON
{
	"id": "same as the name of the folder you created inside ./resources/tutorials",
	"title": "Title of your tutorial",
	"description": "Description of your awesome tutorial",
	"level": "beginners|intermediate|advanced",
	"tags": ["controllers", "directives", "partials", "or whatever you think will be appropriate for your tutorial"],
	"steps": ["names of the steps folders", "elements in this array should be ordered by the steps order"]
}
```

#License

This software is distributed under the terms of the MIT license.
