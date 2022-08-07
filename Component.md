# Component

## The unit of angular building

To use components you have to

1. Create the Component
2. Register it in a module
3. Add an element in HTML markup

## 1. Create `courses.component.ts`

To till Angular that this is a Component use a decorator, the `import` & the `@Component`

```js
import { Component } from '@angular/core;

// uset to till angular how this component works
@Component({
    selector: 'courses',
    template: '<h2>Courses</h2>', // you cannot put here a script tag, to avoid script injection attaking
    styleUrls: ['./courses.component.css']
})

export class CourseComponent{

}
```

**selector:** Create a new HTML element, represent that component. When ever you use <courses></courses> then Courses Component will be rendered **_(Custom element)_**

**template:** The HTML markup which we want to be rendered for this component **OR** you can use a path to a HTML file, like `'./courses.component.html'`

## 2. Register `Courses Component` in the app.module.ts

```js
@NgModule({
    CoursesComponent
})
```

## 3. Add an element in HTML markup

In the `app.component.html` Add <courses></courses>

## Create the 3 steps in one shot

In another terminal tap, or VS terminal run this command

```
ng g c ComName
```

## The generated component will

**CREATE**

- .css => CSS Code
- .html => HTML code
- .ts => Logic code
- .spec.ts => Unit Tests code

**UPDATE**

- app.module.ts
