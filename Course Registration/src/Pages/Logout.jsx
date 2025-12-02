import React, { useEffect } from 'react';
// import { logout } from '../utils/logout';

function Logout() {
    
useEffect(() => {
    // Clear student data
    localStorage.removeItem("stud");
    localStorage.removeItem("student");

    // Clear admin data
    localStorage.removeItem("admin");
    localStorage.removeItem("adminData");

    // Redirect after clearing data
    window.location.href = "/"; 
  }, []);

  return <h2>Logging out...</h2>;
}
export default Logout;