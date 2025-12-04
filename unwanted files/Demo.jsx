import React from 'react'
import "./Demo.css"
function demo() {
  return (
    <div>
      {/*  // const [stud, setStudent] = useState({
        //     studName: "",
        //     studMail: "",
        //     studMob: "",
        //     studQualification: "",
        //     studDateOfJoin: ""
        // })
      
        // function handleStudReg(e) {
        //     e.preventDefault();
        //     console.log("Student Registered");
        // }
      
        // function getStudent(e) {
        //     setStudent({ ...stud, [e.target.name]: e.target.value }
        //     );
        // } */}
     <div className="row rowss">
        <div className="col-md-1 bg-primary">1</div> <div className="col-sm-1 bg-danger">1</div> <div className="col-sm-1 bg-primary">1</div> <div className="col-sm-1 bg-primary">1</div> <div className="col-sm-1 bg-primary">1</div> <div className="col-sm-1 bg-primary">1</div> <div className="col-sm-1 bg-primary">1</div> <div className="col-sm-1 bg-primary">1</div> <div className="col-sm-1 bg-primary">1</div> <div className="col-sm-1 bg-primary">1</div> <div className="col-sm-1 bg-primary">1</div> <div className="col-sm-1 bg-primary">1</div>
     </div>

     <div className="row">
        <div className="col-sm-6 bg-info">6</div>
        <div className="col-sm-3 bg-success">3</div>
        <div className="col-sm-3 bg-danger">3</div>
     </div>
     <div className="row">
        <div className="col-sm-3">
            <div className="card">
                <div className="card-head">head</div>
                <div className="card-body">body</div>
                <div className="card-footer">footer</div>
            </div>
        </div>  <div className="col-sm-3">
            <div className="card">
                <div className="card-head">head</div>
                <div className="card-body">body</div>
                <div className="card-footer">footer</div>
            </div>
        </div>
          <div className="col-sm-3">
            <div className="card">
                <div className="card-head">head</div>
                <div className="card-body">body</div>
                <div className="card-footer">footer</div>
            </div>
        </div>
          <div className="col-sm-3">
            <div className="card">
                <div className="card-head">head</div>
                <div className="card-body">body</div>
                <div className="card-footer">footer</div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default demo
