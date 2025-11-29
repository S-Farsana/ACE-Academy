import React, { useEffect, useState } from 'react'
import '../Pages/ViewCourses.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

function ViewCourses() {

  const [course, setCourse] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/course")
      .then(
        (res) => {
          setCourse(res.data);
          console.log(res.data);
        }
      )
      .catch((err) => console.error(err));
  }, []);
  const handleDelete = (id) => {
  axios
    .delete(`http://localhost:8080/api/course/${id}`)
    .then(() => setCourse(course.filter((data) => data.course_id !== id)))
    .catch((error) => console.error("Error deleting record!", error));
};

  return (

    <div className='MainBodyAbout'>
      <h1 className='headings'>Courses Offered</h1>

      <table className="table-hover table-bordered tableDesign">
        <tbody>
          {course.map((i) => (
            <tr className="tableRow" key={i.id}>
              <td className='tableData' >{i.course_id}</td>
              <td className='tableData'>{i.course_name}</td>
              <td className='tableData'>
                <Link to={`/course/${i.course_id}`} className="btn btn-primary buttonView"> View </Link>
                <button className="btn btn-primary buttonView" onClick={() => handleDelete(i.course_id)}> 
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default ViewCourses

