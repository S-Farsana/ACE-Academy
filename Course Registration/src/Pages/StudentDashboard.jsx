import React from 'react'
import '../Pages/StudentDashboard.css'

function StudentDashboard() {
    const student=JSON.parse(localStorage.getItem('student'))
  return (
    <div>
      <h1>Student Dashboard</h1>
      <h2>Welcome {student?.stud_name}</h2>
    </div>
  )
}

export default StudentDashboard
