import React, { useState,useEffect } from 'react'
import '../Pages/Dashboard.css'
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
      useEffect(() => {
        const admin = JSON.parse(localStorage.getItem("adminData"));
        const student=JSON.parse(localStorage.getItem("student"));

        if(admin){
            setUser(admin)
        }
        else if (student) {
            setUser(student)   
         } else {
      // If nobody logged in, redirect to login
      navigate("/login");
    }
  }, [navigate]);
  

  return (
    <div>
        <h1>Dashboard</h1>
         {user ? (
        <h2> Welcome {user.stud_Name || "ADMIN"}</h2>

    ):(
        <h2>No user logged in</h2>
    )}
    </div>
)}


export default Dashboard


