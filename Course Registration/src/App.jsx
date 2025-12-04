import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login'
import Home from './Pages/Home'
import AddCourse from './Pages/AddCourse'

import ViewCandidates from './Pages/viewCandidates'

import AboutUs from './Pages/AboutUs'
import ExampleFooter from './Components/ExampleFooter/ExampleFooter'
import LoginAdmin from './Pages/LoginAdmin'
import Logout from './Pages/Logout'
import Dashboard from './Pages/Dashboard'
import StudentDashboard from './Pages/StudentDashboard'
import AdminDashboard from './Pages/AdminDashboard'
import ViewCourseCandi from './Pages/ViewCourseCandi'
import Register from './Pages/Register'

// import Demo from './Pages/demo'
// hello
//bvdsjvsjd
function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/loginAdmin' element={<LoginAdmin />} />
        <Route path='/logout' element={<Logout />} />

        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/adminDashboard' element={<AdminDashboard/>}/>
        <Route path='/studentDashboard' element={<StudentDashboard />} />
        
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/addCourse' element={<AddCourse />} />
        
        <Route path='/viewCourseCandi' element={<ViewCourseCandi />} />
        <Route path='/viewCandidates' element={<ViewCandidates />} />
        {/* <Route path='/demo' element={<><Navbar/><Demo/><Footer/></>}/> */}
      </Routes>

      {/* <Footer/> */}
      <ExampleFooter />

    </div>
  )
}
export default App
