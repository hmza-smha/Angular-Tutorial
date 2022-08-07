# Templates

- Use {{ data }} to render something dynamically, variable or method
  - When ever you change the data, it will be changed in the component dynamically.

### Example

```js
import { Component } from '@angular/core;

@Component({
    selector: 'courses',
    template: '<h2>{{ title }}</h2>', // OR you can '<h2>{{ getTitle() }}</h2>'
    styleUrls: ['./courses.component.css']
})

export class CourseComponent{
    title = "Courses";

    getTitle(){
        return this.title;
    }
}
```

## Template Reference variable

```js
import { Component } from "@angular/core";

@Component({
  selector: "courses",
  template: `
    <input type="text" #phone />
    <button (click)="call(phone.value)">Call Now</button>
  `,
})
export class CourseComponent {
  call(phoneNumber: number) {
    console.log(phoneNumber);
  }
}
```
