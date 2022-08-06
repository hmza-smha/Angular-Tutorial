# Files Structure

## e2e
End-to-End Testing
> used for testing a whole scenario 

## node_modules
To store all the third-libraries.

## src
Source Code.

### src/polyfills.ts
make sure the program works for all browsers

### src/main.ts
entry point for the angular application

### src/index.html
entry point for HTML

### src/style.csss
general styles

### src/test.ts
the enrty point for the unit tests

### src/enviroment
useually the project divide to three enviroments
1. Development
2. QA
3. Production
each tem works on different enviroment

### src/app
[modules](Module.md)

### src/app/app.module.ts
```js
@NgModule({
    declarations:[ // contains all the components
        AppComponent
    ],
    imports:[ // contains all modules
        BrowserModule
    ],
    providers: [], // contains services
    bootstrap: [AppComponent] // The root component
})
```

## assets
To store static assests, images, icons...

## angular.json

## Browserlist
to make sure the .js files compatible with the browser.
```npx browserlist``` to list all the browsers supported

## karma.config.js
The runner of Jasmin unit testing