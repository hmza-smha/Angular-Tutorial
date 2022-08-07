# Structural Directives

Manpulate HTML tags

## \*ngIf

- Insert/Remove elements
- conditions

```js
import { Component } from "@angular/core";

@Component({
  selector: "courses",
  template: `
    <h2 *ngIf="!isActive">Hello world!</h2>
    <h2 *ngIf="!username">Hello world!</h2>
  `,
})
export class CourseComponent {
  isActive: boolean = false;
  username: string = "";
}
```

### [hidden]

- elements exists but hidden upon condition

```js
import { Component } from "@angular/core";

@Component({
  selector: "courses",
  template: ` <h2 [hidden]="!isActive">Hello world!</h2> `,
})
export class CourseComponent {
  isActive: boolean = false;
  username: string = "";
}
```

## ngFor

```js
import { Component } from "@angular/core";

// will help you in the auto-complete _INTELLISENSE_
interface Course {
  id: number;
  name: string;
}

@Component({
  selector: "courses",
  template: `
    <ul>
      <li *ngFor="let c of courses; let i = index">
        {{ i }} ) Name: {{ c.name }} Id: {{ c.id }}
      </li>
    </ul>
  `,
})
export class CourseComponent {
  courses: Array<Course>;
}
```

Now, in the example above, when ever the courses increased/decreased by a course, angular will remove the all elements, then render them again, let's solve this problem by:

- track method
- trackBy

```js
import { Component } from "@angular/core";

// will help you in the auto-complete _INTELLISENSE_
interface Course {
  id: number;
  name: string;
}

@Component({
  selector: "courses",
  template: `
    <ul>
      <li *ngFor="let c of courses; let i = index; trackBy: track">
        {{ i }} ) Name: {{ c.name }} Id: {{ c.id }}
      </li>
    </ul>
  `,
})
export class CourseComponent {
  courses: Array<Course>;

  track(index: number, course: Course) {
    return course.id;
  }
}
```

## \*ngSwitch

```js
import { Component } from "@angular/core";

@Component({
  selector: "courses",
  template: `
    <div *ngFor="let c of colors; let i = index; trackBy: track">
      <label for="">{{ c }}</label>
      <input type="radio" id="color_{{ i }}" value="{{ c }} [(ngModel)] =
      "selectedCoulor"/>
    </div>

    <div [ngSwitch]="selectedCoulor">
      <p ngSwitchCase="'red'">Red Selected</p>
      <p ngSwitchCase="'blue'">blue Selected</p>
      <p ngSwitchCase="'green'">green Selected</p>
      <p ngSwitchDefault>Default Selected</p>
    </div>
  `,
})
export class CourseComponent {
  colors: Array<string>;
  selectedCoulor = "";
  constructor() {
    this.colors = ["red", "blue", "green"];
  }
}
```
