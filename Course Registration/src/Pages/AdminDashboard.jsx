import React from 'react'
import '../Pages/AdminDashboard.css'

function AdminDashboard() {
    const admin = JSON.parse(localStorage.getItem("adminData"));
    console.log("ADMIN DATA IN LOCALSTORAGE:", admin);
  return (
      <div>
      <h1>Admin Dashboard</h1>
      <h2>Welcome {admin?.adminEmail}</h2>
    </div>
  )
}

export default AdminDashboard;
