import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Pages/Student.css'


function Student() {
    const student = JSON.parse(localStorage.getItem("student"));

  
  return (
    <div className='MainBodyAbout'>
      <h2>Hi {student?.stud_name}</h2>
       <p><strong>Email:</strong> {student?.studEmail}</p>

      <h3>Selected Courses:</h3>
      {/* <ul>
        {student?.courses?.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default Student
