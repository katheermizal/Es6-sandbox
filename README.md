# Es6-sandbox
Biginer exercise of ES6

## Difference between Functions and classes

* FUNCTIONS  ::  Hoisted  | Can be Overiten  | Stateless Component in React
* CLASSES    :: NotHoisted | Can Extend can't be overiten | Statefull Component in React

## Prototype Method
It's available in browser. can see when we do a console log

## Constructors

Part of the syntax of the class also you can do a one constructor per class or else it'll display a syntax error

There is the method to create an object for class when new instance created


```Javascript
class Car {
    constructor(doors,engine,color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

// extend constructor form Car class
class SUV extends Car {
    constructor(doors,engine,color,brand,carStats){
        // super method will create new objects and pull constructor from Car class
        super(doors,engine,color,carStats);
        //create objects only for this class
        this.brand = brand;
        //create new valuse when the new object SUV is created
        this.wheels = 4;
        this.ac = true;
    }
}
```

## Mixins

It's useful to extend more ten one class into single class

## Class Expression vs Class Declaration

Class Expression

```Javascript
var Car = class {
    constructor(doors,engine,color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
};
```

Class Declaration

```Javascript
class car {
    constructor(doors,engine,color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
};
```

## Main Subjects Covered
* Difference between function and classes
* Strict mode with classes
* Static method usage
* prototype method explained
* Constructors and Super Usage
* Extends intro and Usage
* Mixin intro and Usage

## Reference Link
[Linkedin : JavaScript: Classes](https://www.linkedin.com/learning/javascript-classes-2/introduction-to-classes)