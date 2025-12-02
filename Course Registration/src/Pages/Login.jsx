import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import '../Pages/Login.css'

function Login() {
    const navigate=useNavigate()
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        axios
            // Post login data to backend 
            .post("http://localhost:8080/api/student/login", data)
            .then((res) => {
                alert("Login successful!")
                console.log('Form submitted:', data);
                console.log("user data:", res.data);
                localStorage.setItem("stud", true)
                // You can store in local storage 
                localStorage.setItem("student", JSON.stringify(res.data),);
                // Redirect to dashboard/homepage 
                navigate("/studentDashboard");
            })
    }
    return (
        <div>
            <h1 className='headings'>Login</h1>
            <div className='loginDiv'>

                <form onSubmit={handleSubmit(onSubmit)} className="formData">
                    <div className="feild">
                        <label >Username </label>
                        <input type="text" {...register('studEmail', { required: 'Username is required' })} />
                        {errors.studEmail && (<p className="error">{errors.studEmail.message}</p>)}
                    </div>

                    <div className="feild">
                        <label>Password </label>
                        <input type="password"
                            {...register('studPassword', { required: 'Password is required' })} />

                        {errors.studPassword && (<p className="error">{errors.studPassword.message}</p>)}
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Login
