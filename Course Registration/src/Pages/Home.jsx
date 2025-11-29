import React, { useEffect } from 'react'
import '../Pages/Home.css'
import { Link } from 'react-router-dom'
import ViewCourses from '../assets/image/couses.png'
import Register from '../assets/image/register.jpg'
import candidates from '../assets/image/candidList.jpg'
import newCourse from '../assets/image/newcourse.jpg'

function Home() {
    useEffect(()=>{
        
    })
    return (
        <div className='MainBody'>
            <h1 className='headingsMain'>ACE ACADEMY</h1>
            <h2 className='headings' style={{marginBottom:'40px',marginTop:'10px'}}>WELCOMES YOU</h2>

            <div className='row cardDiv'>

                <div className='col-sm-2 card'>
                    <img src={ViewCourses} className="card-img-top homelogo" alt="not loaded" />
                    <div className="card-body">
                        <p className="card-text">Explore job ready courses</p>
                        </div>
                        <div className='card-footer'><Link to={'/viewCourse'} className="btn btn-primary btns" >Explore</Link></div>
                        
                    
                </div>

                <div className="col-sm-2 card" >
                    <img src={Register} className="card-img-top homelogo" alt="not loaded" />
                    <div className="card-body">
                        <p className="card-text">Register for your course</p>
                        </div>
                        <div className='card-footer'>
                        <Link to={'/studentReg'} className="btn btn-primary btns">Register</Link>
                        </div>
                    
                </div>

                <div className="col-sm-2 card" >
                    <img src={candidates} className="card-img-top homelogo" alt="not loaded" />
                    <div className="card-body">
                        <p className="card-text">View Candidate List</p>
                        </div>
                        <footer className="card-footer">
                        <Link to={'/viewCandidates'} className="btn btn-primary btns">View</Link>
                        </footer>   
                </div>

                <div className="col-sm-2 card" >
                    <img src={newCourse} className="card-img-top homelogo" alt="not loaded" />
                    <div className="card-body">
                        <p className="card-text">Add new courses</p>
                        </div>
                        <footer className="card-footer">
                        <Link to={'/addCourse'} className="btn btn-primary btns">Add</Link>
                        </footer>
                </div>
            </div>
        </div>
    )
}

export default Home
