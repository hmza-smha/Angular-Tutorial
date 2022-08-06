# TypeScript

**transpile:** Convert from language to another. <br>
TypeScript => transpilation => JavaScript
- TS => tsc => JS
> Browsers Don't understands TS.



### It is a super-set of JavaScript, that means it is javascript but with additionlal features.

=> Anything valid in Javascript is valid in Typescript.

## Things exists in TS doesn't exists in JS
1. Strong typing *(opitional)*
    - when ever you declare a variable, you can specify the type

2. OOP
    - classes, interfaces, access modifiers, generic, .....

3. catch errors at compile-time instead of run-time, 

4. Access grat tools out there



## Install TS
```ng tutorial>npm install -g typescript```
> ```-g``` means install globel on the machine

## Getting Started
```tsc --version```

## Run using Node.js
```node fileName.ts/js```

## How Typescript Differ

This code will raise an error in TS, but won't in JS.

```javascript
// let i, => i cannot reachable outside the for
function doSomethidng() {
    for(let i = 0; i < 10; i++) {
    }

    console.log(i);
}
```

---

This will not work in TS

```javascript
let count = 5;
count = 'a';
```

### this funny thing is
if you use ```tsc main.ts```, the compiler will compile TS to JS, and it will solve the errors.

In the previious examples, it will replace ```let``` to ```var```

---

This will work in TS, 'a' has 'Any' type

```javascript
let a;
a = 1;
a = '1';
a = true;
```

---

### Typescript Types

```javascript
let a: number;
let a: boolean;
let a: string;
let a: any;
let a: number[];
let a: number[] = [1, 2, 3];
let a: any[] = [1, '2', false];
enum Color = {red, blue, green};
let bgc = Color.red;
```
---

### Typescript Assertions

```javascript
let msg; // this now is Any
msg = 'abc'; // it still Any
let endsWithC = (<string>msg).endsWith('c'); // assertion type 1 
let endsWithC = (msg as string).endsWith('c'); // assertion type 1 
// Note: These assertions dose not change the type of the variable in memory, it just till the compiler the type of the variable, so you can access the INTELLISENSE. which is the drop down suggestions.
```
---

### OOP

#### Custom Type

Access Modifires in TS
- public, *by default all members are public*
- private
- protected

```javascript
// create a class
calss Point {
    private x: number; // feild 1, by default undefined
    y: number; // feild 2, by default undefined

    // Question mark means in it optional
    // You cannot have more than one constructor in TS
    // if you made a variable optional, than all variables on the right side of that variable should be optional
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    private draw(){
        // ...
    }

    getDistance(another: Point){
        // ...
    }
}

// create an object, and call a method
let point: Point; // if you leave it like this it will be undefined object, use this instead
let point = new Point(1, 2);
point.y = 15;
point.x = 12; // you cannot do this cuz it is private :)
point.draw(); // you cannot do this cuz it is private :)
```


Optimize the previous Code & properities

```javascript
class Point{

    constructor(private _x?: number, private _y?: number){

    }


    get x(){
        return _x;
    }

    // drop this if you want it readonly
    set x(value){
        if(value < 0)
            throw new Error("...");

        this.x = value;
    }
}

let point = new Point(1, 2);
point.x = 15;
let x = point.x;
```

## Decorators
- Apply something when you run the class
- Describe something.
- You can apply it to a class, methods, variables ...

### Example 1
```js
function age(){
    console.log("Hello From the Decorator");
}

@age
class Greeting{
    name:string;
    message:string;
    constructor(name:string, message:string){
        this.message = message;
        this.name = anme;
    }
    syaHello(){
        console.log("Hello!");
    }
}
```

### Example 2
```js
function classDecorator<T extends {new (...args:any[]):{}}>(constructor: T){
    return class extends constructor {
        newProperity = "new Properity"; 
        hello = "override";
    }
}

@classDecorator
class Greeting{
    properity = "Properity"; 
    hello:string;
    constructor(h:string){
        this.hello = h;
    }
    syaHello(){
        console.log("Hello!");
    }
}

console.log(new Greeting('world'));

// output:
/*
    {
        properity: 'Properity',
        hello: 'override',
        newProperity: 'new Properity';
    }
*/
```

### Example 3

```js
function student(config: any){ // decorator factory
    return function(target: any){ // the decorator it self
        console.log(config, target);
    }
}

@student({
    course: 'Angular'
})
class Person{}

console.log(new Person());


// output
/*
    { course: 'Angular' } [Function: PersonS]
*/
```