import React, { useEffect, useState } from 'react'
import '../Pages/ViewCandidates.css'
import axios from 'axios'

function ViewCandidates() {
  const[student,setStudent]=useState([])


  useEffect(()=>
  {
    axios
    .get('http://localhost:8080/api/student')
    .then((res)=>{
      setStudent(res.data)
      console.log(res);      
    })
    .catch((err)=>console.log(err));
  },[])

  const handleDelete = (id) => {
  axios
    .delete(`http://localhost:8080/api/student/${id}`)
    .then(() => setStudent(student.filter((data) => data.stud_id !== id)))
    .catch((error) => console.error("Error deleting record!", error));
};

  return (
    <div className='bodyStud'>
      <h1 className='headings'>View Students</h1>
<table className="table table-hover table-bordered tableDesignStud">
  <thead className='table-primary'>
      <tr className='tableRowStud'>
        <th className='tableDataStud'>Id</th>
        <th className='tableDataStud'>Name</th>
        <th className='tableDataStud'>Email</th>
        <th className='tableDataStud'>Mobile Num.</th>
        <th className='tableDataStud'>Qualification</th>
        <th className='tableDataStud'>Action</th>
      </tr>
    </thead>
    <tbody>
     { student.map((i)=>(
<tr className='tableRow' key={i.stud_id}>
  <td className='tableDataStud'>{i.stud_id}</td>
  <td className='tableDataStud'>{i.stud_name}</td>
  <td className='tableDataStud'>{i.studEmail}</td>
  <td className='tableDataStud'>{i.stud_mob}</td>
  <td className='tableDataStud'>{i.stud_qualification}</td>
  <td className='tableDataStud'> <button 
  className="btn btn-primary buttonView" 
  onClick={() => handleDelete(i.stud_id)}>
Delete</button></td>
  </tr>
      ))
     }
      </tbody>
</table>
    </div>
  )
}

export default ViewCandidates
