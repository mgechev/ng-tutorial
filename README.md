# ng-tutorial

**ng-tutorial** is interactive tutorial for AngularJS. It contains tutorials in different topics labeled by their complexity (beginner, intermediate, advanced). Basically ng-tutorial gives you a task, which contains multiple steps and allows you to complete the task online. If you have difficulties of completing any of the steps for given task you can view its source code.

#How to contribute

Here are few ides for contributing:

1. Add new tutorials. You can check the "Add Tutorial" sub-section for further instructions.
2. Improve the design. I'm not a designer but I know it can look better...
3. Hack on the code! There are some not that pretty tricks I did. If you find such you can fix them and push the changes!

If you find a way to improve the application you can contribute by forking it and making a pull request with your changes.

##Add Tutorial

Currently the most necessary contribution is adding new tutorial. Adding new tutorial is quite simple task. All tutorials are located in `./resources/tutorials`. In order to create new tutorial you should create new folder with unique name in the tutorials folder. In this folder you can add all the steps and the requirements for completing them. For each step you should create different folder with custom name (its better to chose name which provides basic idea what the step is about). Inside the step you should have the following files:

* task.md - description of the current task in markdown format
* solution.js - file which contains the JavaScript required for the solution of the step
* solution.html - file which contains the HTML required for the solution of the step
* *bootstrap.js* - file which contains the JavaScript which bootstraps the step (initial source code)
* *bootstrap.html* - file which contains the HTML which bootstraps the step (initial source code)

Last two files are not required.

If you want to include communication with RESTful service, external templates or another task, which requires additional files inside your tutorial, you can put them in folder named `resources` inside tutorial folder.

The last step for adding new tutorial is to include meta information about it in the JSON array inside `./resources/tutorials.json`. The information should be in the following format:

```JSON
{
	"id": "same as the name of the folder you created inside ./resources/tutorials",
	"title": "Title of your tutorial",
	"description": "Description of your awesome tutorial",
	"level": "beginner|intermediate|advanced",
	"tags": ["controllers", "directives", "partials", "or whatever you think will be appropriate for your tutorial"],
	"steps": ["names of the steps folders", "elements in this array should be ordered by the steps order"]
}
```

# Contributors

[![mgechev](https://avatars.githubusercontent.com/u/455023?v=3&s=117)](https://github.com/mgechev)[![IliaSky](https://avatars.githubusercontent.com/u/2514449?v=3&s=117)](https://github.com/IliaSky)[![bradydowling](https://avatars.githubusercontent.com/u/6668371?v=3&s=117)](https://github.com/bradydowling)


#License

This software is distributed under the terms of the MIT license.