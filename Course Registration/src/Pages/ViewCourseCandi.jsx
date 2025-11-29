import React, { useState } from 'react'
import '../Pages/ViewCourseCandi.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function ViewCourseCandi() {
    const [course, setCourse] = useState([])

   const stud_status = localStorage.getItem("stud") === "true";

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
            <h1 className='headingsAbout'>Courses Offered</h1>

            <div className="container-md">
                <div className="row">
                    {course.map((i) => (
                        <div className="col-md-4" key={i.course_id} >
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"><u>{i.course_name}</u>

                                    </h4>
                                    <ul className="card-text">
                                        <li><strong>Duration:</strong> {i.course_duration}<span> months</span></li>
                                        <li><strong>Fees:</strong> {i.course_fee}<span>(in Rs)</span></li>
                                        <li><strong>Trainer:</strong> {i.trainer_name}</li>
                                        <li><strong>Course ID:</strong> {i.course_id}</li>
                                    </ul>
                                    <div className='buttonDiv'>
                                        <Link to={'/studentReg'} className="btn btn-primary btns">
                                            Register
                                        </Link>
                                     {stud_status == true ? <button className="btn btn-primary btns" onClick={() => handleDelete(i.course_id)}>
                                            Delete
                                        </button> : ""}
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
