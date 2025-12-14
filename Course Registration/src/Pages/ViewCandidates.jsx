 import React from 'react';
import '../Pages/ViewCandidates.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ViewCandidates() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/student')
      .then((res) => setStudent(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/student/${id}`)
      .then(() => {
        setStudent(student.filter((s) => s.stud_id !== id));
      })
      .catch((error) => console.error("Error deleting record!", error));
  };

  return (
    <div className="viewStudent">
      <h1 className="headingViewStudents">View Students</h1>

      <table className="studList">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Qualification</th>
            <th>Courses</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {student.map((i) => (
            <tr key={i.stud_id}>
              <td>{i.stud_id}</td>
              <td>{i.stud_name}</td>
              <td>{i.stud_qualification}</td>

              {/* COURSE SUBTABLE */}
              <td>
                {i.courses && i.courses.length > 0 ? (
                  <table className="courseSubTable">
                    <thead>
                      <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {i.courses.map((c) => (
                        <tr key={c.course_id}>
                          <td>{c.course_id}</td>
                          <td>{c.course_name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  "No Courses"
                )}
              </td>

              <td>
                <button
                  className="viewStudentBtn"
                  onClick={() => handleDelete(i.stud_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewCandidates;
