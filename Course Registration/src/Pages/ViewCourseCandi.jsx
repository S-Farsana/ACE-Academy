import React, { useState,useEffect } from 'react'
import '../Pages/ViewCourseCandi.css'
import axios from 'axios'

function ViewCourseCandi() {
    const [courses, setCourses] = useState([])
    
  const student = JSON.parse(localStorage.getItem("student"));
  const admin_status = localStorage.getItem("admin") === "true"

  // Fetch all courses
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/course")
      .then((res) => {
        setCourses(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
   

  // Delete course (Admin only)

     const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/course/${id}`)
      .then(() => setCourses(courses.filter((c) => c.course_id !== id)))
      .catch((error) => console.error("Error deleting record!", error));
  };

  // Register student to course (Many-to-many)

  const handleRegister = (course_id) => {
    if (!student) {
      alert("Please login first!");
      return;
    }

    axios
      .put(
        `http://localhost:8080/api/student/${student.stud_id}/enroll/${course_id}`
      )
      .then((res) => {
        alert("Course enrolled successfully!");
        // update local storage
        localStorage.setItem("student", JSON.stringify(res.data)); 
        
      })
      .catch((err) => {
        if (err.response?.status === 409) {
          alert("You are already enrolled in this course.");
        } else {
          console.error(err);
        }
      });
  };
    return (
       <div className="MainBodyAbout">
      <h1 className="headingsAbout">Courses Offered</h1>

      <div className="container-md">
        <div className="row">
          {courses.map((course) => (
            <div className="col-md-4" key={course.course_id}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    <u>{course.course_name}</u>
                  </h4>

                  <ul className="card-text">
                    <li>
                      <strong>Duration:</strong> {course.course_duration} months
                    </li>
                    <li>
                      <strong>Fees:</strong> {course.course_fee} (Rs)
                    </li>
                    <li>
                      <strong>Trainer:</strong> {course.trainer_name}
                    </li>
                    <li>
                      <strong>Course ID:</strong> {course.course_id}
                    </li>
                  </ul>

                  <div className="buttonDiv">
                    {!admin_status && (
                      <button
                        className="btn btn-primary btns"
                        onClick={() => handleRegister(course.course_id)}
                      >
                        Enroll
                      </button>
                    )}

                    {admin_status && (
                      <button
                        className="btn btn-danger btns"
                        onClick={() => handleDelete(course.course_id)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewCourseCandi
