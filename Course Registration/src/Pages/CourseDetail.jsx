import React, { useEffect, useState } from 'react'
import './courseDetail.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function CourseDetail() {
  const [detail, setDetail] = useState({})
  // const {params}=useParams()
  // const Id=params
  const { id } = useParams();
  

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/course/${id}`)
      .then(res => {
        setDetail(res.data)
        console.log(res.data);
      }
      )
      .catch(err => console.log(err));
  }, [id]);


  return (

    <div className='detailsDiv'>
      <div className="card-body">
        <h1>{detail.course_name}<br></br></h1>
        <ul>
          <li>Duration  : {detail.course_duration}</li>
          <li>Fees      : {detail.course_fee}</li>
          <li>Trainer   : {detail.trainer_name}</li>
        </ul>
        <Link to={'/studentReg'} className="btn btn-primary btns">Register</Link>'
      </div>
    </div>
  )
}

export default CourseDetail
