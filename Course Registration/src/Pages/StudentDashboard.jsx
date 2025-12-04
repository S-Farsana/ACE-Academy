import React from "react";
import "../Pages/StudentDashboard.css";

function StudentDashboard() {
  const student = JSON.parse(localStorage.getItem("student"));

  return (
    <div className="profile-container">

      {/* Student Profile Card */}
      <div className="profile-card">
        <div className="avatar">
          {student?.stud_name?.charAt(0)}
        </div>

        <h2>{student?.stud_name}</h2>
        <p className="email">{student?.studEmail}</p>

        <div className="info-section">
          <p><strong>Mobile:</strong> {student?.stud_mob}</p>
          <p><strong>Qualification:</strong> {student?.stud_qualification}</p>
        </div>
      </div>

      {/* Course Details */}
      <div className="course-card">
        <h3>Enrolled Course</h3>
{/* to check whether a student has no courses, */}
        {student?.courses?.length === 0 ? (
    <p className="no-course">You are not enrolled in any course yet.</p>
  ) : (
    student.courses.map((c) => (
      <div className="course-box" key={c.course_id}>
        <p><strong>Course Name:</strong> {c.course_name}</p>
        <p><strong>Duration:</strong> {c.course_duration} months</p>
        <p><strong>Fee:</strong> ₹{c.course_fee}</p>
        <p><strong>Trainer:</strong> {c.trainer_name}</p>
      </div>
    ))
  )}
</div>

    </div>
  );
}

export default StudentDashboard;

