# Creating services

In this task you will learn how to create custom services during developing such. Some of the built-in services of AngularJS are `$http`, `$resource`, `$location`.
Services are used for encapsulating logic required for frequent tasks during development of SPA, for example - XHR, WebSockets, locaStorage and so on.

You can combine different services by using Dependency injection. For defining services you need a module. As we talked before, modules are containers which group logically our components. In order to create new module you should use the following syntax:

```
angular.module('moduleName', ['dependency1', 'dependency2']);
```

Each module has name and dependencies. It is very important to specify the array with dependencies (even it is empty) because otherwise AngularJS will think that you need a reference to allready existing module and will try to find module with the specified name.

* Create new module called `todoApp` with no dependencies and keep reference to it in variable called `TodoApp`.

Modules has few methods, some of them are:

* controller
* directive
* factory
* provider
* service
* animation
* etc.

All of the listed methods are used for creating different AngularJS components. Most frequently used are `controller`, `directive`, `factory`, `service`. We will talk for all of these methods in later tutorials. Now lets concentrate particularly on the `factory` method. It has the following syntax:

```
myModule.factory('ServiceName', function ServiceFactory () {
  //private variables and functions
  return {
    //public API
  };
});
```

The `ServiceFactory` looks very similar to the module pattern. It returns object literal which is the public API of the service.

* Implement service called `LocalStorage` which internally uses `localStorage` for storing data. The service should has the following public API:
	* getItem(key)
	* setItem(key, value)
	* removeItem(key)

The service should use a single key of `localStorage`. The name of this key should be defined as "private variable" inside the `ServiceFactory` and it's value should be `todoApp`.

Now the last step of this tutorial...

* In order to initialize your service you need to bootstrap your application with specified module. Put `todoApp` value of the `ng-app` attribute, this will initialize your module and the defined `LocalStorage` service.

You may wonder why we don't use directly `localStorage` but create custom service which wrapps it. This is reasonable question. There are few reasons behind this:
* By wrapping `localStorage` we will be able to easily change the internal behaviour of the service
* If we need to test component which is dependent from our `localStorage` wrapper we will be able to mock it pretty easily without need of monkey patching.

Now the only thing remaining is to use our service. We want it to store our todo items this means that we should invoke its `setItem` and `getItem` methods when specific events happens.