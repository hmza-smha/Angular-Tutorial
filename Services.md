# Services

### Most of the time we get the data from the server

**Approach 1**
Add the logic *(HTTP request)* here in this component
1. Hard to test, because you will be always hit the database
2. When ever you want the courses *(out side this component)* you have to re-write the logic for hitting the API
3. the component should'nt contain logic other than erpresentation logic

**Approach 2**
Use a service
1. Solves the previous problems

**Example**

## Create a Service
```courses.service.ts``` it is a plane TS class, *doesn't has any decorator*


### the service
```js

// use this only if your service itself has dependencies
@Ingectable()

export class CoursesService{
    courses = ["Course 1", "Course 2", "Course 3", ];

    getCourses(){
        return this.courses;
    }
}
```

### Register the servise
In ```app.module.ts``` 
```js
@NgModule({
    // angular creates a Singlton service always
    providers: [
        CoursesService
    ]
})
```


```courses.component.ts```

```js
import { Component } from '@angular/core';

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
    courses;

    // angular will create an instance of service and then pass it to the constructor, by default;
    constructor(service: CoursesService){
         
    }

    // you can use this constructor, but this will violate service job
    // 1) you will get back to the same problem, you cannot test it
    // 2) if you decided to add a parameters for the constructor, then you have to come back to all objects and modify it
    /*
    constructor(){
        let service = new CoursesService();
        this.courses = service.getCouurses();
    }
    */
}
```

## Create Service like proffesionals
```ng g s ServiceName```

```js
// use this only if your service itself has dependencies
@Ingectable()
```

this will generate 
1. service.spec.ts ==> for tesing
2. service.ts ==> for tesing ==> hitting APIs