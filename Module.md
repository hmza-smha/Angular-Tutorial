# Module

1. In TS we define our program into multiple files
2. In file we export one or more types, these types can be classes, functions, variables, or objects
3. When ever we need to use these types, we need to import them first
4. when ever you have ```export``` keyword, then it is a module

### src/app
### src/app/app.module.ts
```js
@NgModule({
    declarations:[ // contains all the components
        AppComponent
    ],
    imports:[ // contains all modules
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent] // The root component
})
```


```js
// Module declaration
// This file is not accessible from outside, it defied on its scope
// use export to make it accessible, and import to use it
export class Point{

    constructor(private _x: number, private _y: number){

    }

    draw(){
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
}
```