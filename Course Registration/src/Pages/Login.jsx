import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../Pages/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
    const navigate = useNavigate()

    const { register,  
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        axios
            // Post login data to backend
            .post("http://localhost:8080/api/student/login",data)
                
            .then((res) => {
                alert("Login successful!")
                console.log('Form submitted:', data);
                console.log("user data:", res.data);
                localStorage.setItem("stud", true)

                // You can store in local storage
                localStorage.setItem("student", JSON.stringify(res.data),);
                // Redirect to dashboard/homepage
                
                navigate("/home");  
            })
            .catch(err => {
                if (err.response) {
                    alert(err.response.data); // backend error message
                    console.error(err);
                } else {
                    alert("Login failed");
                }
            });
    };
    return (
        <div>
            <h1 className='headings'> Student Login</h1>
            <div className='loginDiv'>

                <form onSubmit={handleSubmit(onSubmit)} className="formData">
                    <div className="feild">
                        <label htmlFor="studEmail ">Username : </label>
                        <input type="text" id='studEmail' {...register('studEmail', { required: 'Username is required' })} />
                        {errors.studEmail && (<p className="error">{errors.studEmail.message}</p>)}
                    </div>

                    <div className="feild">
                        <label htmlFor="studPassword">Password</label>
                        <input type="password"
                            id='studPassword'
                            {...register('studPassword', { required: 'Password is required' })} />

                        {errors.studPassword && (<p className="error">{errors.studPassword.message}</p>)}
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to={'/register'} className="btn btn-primary btns">Register</Link>
                </form>
            </div>
        </div>
    )
}

export default Login

//     const[user,setUser]=useState("")
//     const[pass,setPass] = useState("")

// function getUser(e){
//         setUser(e.target.value);
//             }

// function getPass(e){
//     setPass(e.target.value)
// }

// function handleSubmit(e) {
// e.preventDefault();
// console.log("Form submitted");
// }


{/* <form onSubmit={handleSubmit} className='formData' >
            <div className='feild'>
                <label htmlFor="username">Username  </label>
            <input type='text' name='username' value={user} onChange={getUser} required></input>
            </div>
            <div className='feild'>
<label htmlFor='stud_password'>Password   </label>
            <input type='password' name='stud_password' value={pass} onChange={getPass} required></input>
            
            </div>
            

            <button type='submit' className="btn btn-primary">Submit</button>
        </form> */}