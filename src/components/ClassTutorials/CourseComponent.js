import React,{useState} from 'react'

export function CourseComponent(){

    const coursesList=['Java','SpringBoot','JavaScript','React','SQL'];

    const [courses,setCourses]=useState(coursesList);
  

    return(
        <ul>
        {
          courses.map((element)=>
                <li key={element}s>{element}</li>    
          )
        }
      </ul>
    );
}

export function TestComponent(){
    return(
        <h1>Test</h1>
    );
}
