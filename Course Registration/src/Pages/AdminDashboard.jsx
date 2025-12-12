import React, { useState, useEffect } from 'react';
import '../Pages/AdminDashboard.css';
import axios from 'axios';

function AdminDashboard() {
  const admin = JSON.parse(localStorage.getItem("adminData"));
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/student')
      .then((res) => setStudent(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="adminDashboard">
      <h1 className="headingAdminDash">Welcome {admin?.adminEmail}</h1>
      <h3 className="subHeadingAdminDash">Student List</h3>

      <table className="studList">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Qualification</th>
            <th>Courses
              <table className="courseSubTable">
                <thead>
                  <tr>
                    <th>Course ID :</th>
                    <th>Course Name</th>
                  </tr>
                </thead>
              </table>
            </th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {student.map((i) => (
            <tr key={i.stud_id}>
              <td>{i.stud_id}</td>
              <td>{i.stud_name}</td>
              <td>{i.stud_qualification}</td>

              {/* COURSE SUB-TABLE */}
              <td>
                {i.courses && i.courses.length > 0 ? (
                  <table className="courseSubTable">
                    <tbody>
                      {i.courses.map((c) => (
                        <tr key={c.course_id}>
                          <td>{c.course_id} :</td>
                          <td>{c.course_name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  " "
                )}
              </td>

              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
