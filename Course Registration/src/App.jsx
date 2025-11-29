import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login'
import Home from './Pages/Home'
import AddCourse from './Pages/AddCourse'
import StudentReg from './Pages/StudentReg'


import ViewCourses from './Pages/ViewCourses'


import AboutUs from './Pages/AboutUs'
import ExampleFooter from './Components/ExampleFooter/ExampleFooter'
import Register from './Pages/Register'
import CourseDetail from './Pages/CourseDetail'
import ViewCandidates from './Pages/ViewCandidates'
import ViewCourseCandi from './Pages/viewCourseCandi'
import Student from './Pages/Student'
import LoginAdmin from './Pages/LoginAdmin'

// import Demo from './Pages/demo'

function App() {
  return (
    <div>
  
     <Navbar/>
    
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='loginAdmin' element={<LoginAdmin/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Student/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>
      <Route path='/addCourse' element={<AddCourse/>}/>
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path='/studentReg' element={<StudentReg/>}/>
      {/* <Route path='/viewCourses' element={<ViewCourses/>}/> */}
          <Route path='/viewCourse' element={<ViewCourseCandi/>}/>
      <Route path='/viewCandidates' element={<ViewCandidates/>}/>

  
      {/* <Route path='/demo' element={<><Navbar/><Demo/><Footer/></>}/> */}
     </Routes>
     
     {/* <Footer/> */}
     {/* <ExampleFooter/> */}
    
     
    </div>
  )
}

export default App
