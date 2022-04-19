# Object Oriented JS

- we use new to create a new object
  - it is usually followed by the new of the object type that is being created
  - `const ages = new Array(20, 25, 30)` :we are creating an array object and putting it in the ages variable
    - constructor: function that creates an object
    - constructors can be object literals or object constructors, they both create objects
- object in JS are like objects in real life
- they will have properties and methods (things they can do)
- arrays are just object

- arrays can be created using:

  - [] : square brackets
  - new Array : constructor function

- methods are placed in the proto prototype

- if it has `new` keyword: we are creating an object

- objects can be created using:

  - {} : object literals
  - new Object : object constructor

- 'Everything in JS is an object' is not a true statment
  - primitive types are not objects, but can behave like one due to the temporary wrapper the JS compiler applies on them
    - they don't have methods and properties
    - the JS compiler wraps the primitive type wraps into a wrapper object and then it uses the property or method applied and returns the value
- const name = 'name'
- const name2 = new String('name2') // this is what happens when you call a string method on a primitive string

- Using object literal means we have to write the object again and change the value to create objects

- we can use prototypes or classes(ES6) as way to create object
- classes uses prototypes model
  - they make it a bit easier to understand

1
Classes

- a class is like a blueprint for an object
  - describes its properties and functionality
  - all objects created will have those
- we give values to those properties
- we use a class to describe the object

- we attach properties to the instance in the constructor
- we add methods outside of the constructor

- a method that doesn't return a value will automatically be assigned a return value of
  undefined

- chaining methods
  - if you if you plan to chain you should use return this

Class inheritance or subclass

- classes that inherint from a class but add properties and methods.

2
Prototypal Inheritance

- don't add method in the constructor add it in the prototype

Prototype: every object in JS has a prototype

- it contains all the methods for that object type
- `__proto__`: property that points to the prototype and gives access to the methods

- storing methods in the prototype will make it more efficent
- add `return this` to all for method chaining

Prototypal Inheritance
