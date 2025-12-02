import React, { useState,useEffect } from 'react'
import '../Pages/Dashboard.css'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  
    const navigate = useNavigate();
    
      useEffect(() => {
        const admin = JSON.parse(localStorage.getItem("adminData"));
        const student=JSON.parse(localStorage.getItem("student"));

         if (admin) {
      navigate("/adminDashboard");
    } else if (student) {
      navigate("/studentDashboard");
    } else {
      navigate("/login");
    }
  }, [navigate]);
 
  

  return (
    <div>
        
    </div>
)}


export default Dashboard


