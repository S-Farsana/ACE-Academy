import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login'
import Home from './Pages/Home'
import AddCourse from './Pages/AddCourse'
import StudentReg from './Pages/StudentReg'
import ViewCandidates from './Pages/viewCandidates'
import ViewCourses from './Pages/viewCourses'
import AboutUs from './Pages/AboutUs'
import ExampleFooter from './Components/ExampleFooter/ExampleFooter'
import LoginAdmin from './Pages/LoginAdmin'
// import Demo from './Pages/demo'
// hello
//bvdsjvsjd
function App() {
  return (
    <div>
  
     <Navbar/>
    
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/loginAdmin' element={<LoginAdmin/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>
      <Route path='/addCourse' element={<AddCourse/>}/>
      <Route path='/studentReg' element={<StudentReg/>}/>
      <Route path='/viewCourses' element={<ViewCourses/>}/>
      <Route path='/viewCandidates' element={<ViewCandidates/>}/>
      {/* <Route path='/demo' element={<><Navbar/><Demo/><Footer/></>}/> */}
     </Routes>
     
     {/* <Footer/> */}
     <ExampleFooter/>
    
     
    </div>
  )
}

export default App
