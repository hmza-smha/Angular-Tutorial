# Interpolatin & Binding

## {{ --- }} // GET

- This is just for getting data, you can not create object, define variables, assignments .....

## [ --- ] OR bind-style // SET

## [( --- )] // GET & SET

### One Way Data binding

- From .ts to .html using interpolation
- from .html to .ts using events, _(forms)_

### Two Way Data binding

- The [()] syntax combines the brackets of property binding, [], with the parentheses of event binding, (), as follows.
- [(target)] = "expression"
- target can not be HTML attribute
- Usually used with **ngModel**
- **ngModel** Usually used with **Forms**

```js
import { Component } from "@angular/core";

// uset to till angular how this component works
@Component({
  selector: "courses",
  // data view
  template: "<h2 [style]='someColor'>{{ getNum() == 25 ? 'Yes' : 'NO' }}</h2>", // you cannot put here a script tag, to avoid script injection attaking
  styleUrls: ["./courses.component.css"],
})
export class CourseComponent {
  // Data source
  someColor = "color:#eee";
  getNum() {
    return 25;
  }
}
```

### This button will be disabled while someValue is empty

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <button [disabled]="!someValue">Click me</button>
    <input [(ngModel)]="someValue" />
    <p>{{ someValue }}</p>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  someValue: any = "rrrdss";
}
```

## Things

- <p [class.hamza]='someValue'>Paragraph</p>

> This will add class attribute with value hamza, if someValue not empty

- <p [class]='{b: someValue, y: !someValue}'>Paragraph</p>

> If someValue is empty then use b class, otherwise use y class.

- [style.color]="someValue ? 'red' : 'green'"
