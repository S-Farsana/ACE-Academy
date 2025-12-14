import { useEffect,useState } from 'react';
import '../Pages/AdminDashboard.css';
import axios from 'axios';

function AdminDashboard() {
  const admin = JSON.parse(localStorage.getItem("adminData"));

  const [studCount, setStudCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  
  useEffect(()=>{
    axios
    .get("http://localhost:8080/api/student/count")
   .then(res => setStudCount(res.data))
      .catch(err => console.error(err));

          axios.get("http://localhost:8080/api/course/count")
      .then(res => {
        setCourseCount(res.data)
      console.log(res.data);
    })
      .catch(err => console.error(err));
  }, []);
  
  return (
    <div className="adminDashboard">
      <h1 className="headingAdminDash">Welcome {admin?.adminEmail}</h1>

      <div className="card cardStyle">
  <div className="card-body cardBody">
    <h5 className="card-title">Total Number of students</h5>
    <h4>{studCount}</h4>
    </div>

    <div className="card-body cardBody">
    <h5 className="card-title">Total Number of courses</h5>
    <h4>{courseCount}</h4>
    </div>
</div>
    </div>
  );
}

export default AdminDashboard;
