import React from 'react'
import '../Pages/Home.css'
import { Link } from 'react-router-dom'
import ViewCourses from '../assets/image/couses.png'
import candidates from '../assets/image/candidList.jpg'
import newCourse from '../assets/image/newcourse.jpg'

function Home() {
    const admin = JSON.parse(localStorage.getItem('admin'))
    // const student = JSON.parse(localStorage.getItem('stud'))

    return (
        <div className='homePage'>
            <h1 className='headingsMainHome'>ACE ACADEMY</h1>
            <h2 className='headingsSubHome' style={{ marginBottom: '40px', fontSize: '35px', marginTop: '10px' }}>WELCOMES YOU</h2>

            {/* _____Admin View____________ */}

            {(admin ?
                <div className='row cardDiv'>

                    <div className='col-sm-2 card'>
                        <img src={ViewCourses} className="card-img-top homelogo" alt="not loaded" />
                        <div className="card-body">
                            <p className="card-text">Explore job ready courses</p>
                        </div>
                        <div className='card-footer'><Link to={'/viewCourseCandi'} className="btn btn-primary btns" >Explore</Link></div>
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
                : "")}

{/* _______________ Other User View(guest and student) _________ */}

           {(!admin) ? (
    <div className='col-sm-2 card'>
        <img src={ViewCourses} className="card-img-top homelogo" alt="not loaded" />
        <div className="card-body">
            <p className="card-text">Explore job ready courses</p>
        </div>
        <div className='card-footer'>
            <Link to={'/viewCourseCandi'} className="btn btn-primary btns">Explore</Link>
        </div>
    </div>
) : null}
            
        </div >
    )
}

export default Home;
