import React from "react";
import "../Pages/StudentDashboard.css";

function StudentDashboard() {
  const student = JSON.parse(localStorage.getItem("student"));

  return (
    <div className="profile-container">
      <h1 className="studDash studHeading">Welcome * <b><i>{student.stud_name}</i></b> * </h1>

      {/* Student Profile Card */}
      <div className="profile-card studDetail">
        {/* <div className="avatar">
          {student?.stud_name?.charAt(0)}
        </div>
        <h2>{student?.stud_name}</h2> */}

      <div className="info-section">
        <h4>{student?.stud_name}</h4>
        <p><strong>E-mail id: </strong>{student?.studEmail}</p>
          <p><strong>Mobile:</strong> {student?.stud_mob}</p>
          <p><strong>Qualification:</strong> {student?.stud_qualification}</p>
        </div>
      </div>

      {/* Course Details */}
      <div className="course-card studCourseDash">
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

