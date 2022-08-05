# Directives

### Used to manipulate DOM
- *ngFor
- *ngIf

Use ` ` to make the template more than one line;;

### Example
```js
import { Component } from '@angular/core;

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `, 
    styleUrls: ['./courses.component.css'] 
})

export class CourseComponent{
    title = "Courses";
    courses = ["Course 1", "Course 2", "Course 3", ];
}
```