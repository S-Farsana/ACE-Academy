import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function LoginAdmin() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        axios
            .post("http://localhost:8080/api/admin/login", data)
            .then((res) => {
                alert("Admin Login Successful");
                console.log("Form submitted:", data);

                localStorage.setItem("admin", true);
                localStorage.setItem("adminData", JSON.stringify(res.data));

                navigate("/");   // redirect to admin dashboard
            })
            .catch(err => {
                if (err.response) {
                    alert(err.response.data.error || "Login failed");
                    console.error(err);
                } else {
                    alert("Login failed");
                }
            });
    };

    return (
        <div>
            <h1 className='headings'>Admin Login</h1>
            <div className='loginDiv'>

                <form onSubmit={handleSubmit(onSubmit)} className="formData">
                    <div className="feild">
                        <label htmlFor="adminEmail">Username: </label>
                        <input
                            type="text"
                            id='adminEmail'
                            {...register('adminEmail', { required: 'Username is required' })}
                        />
                        {errors.adminEmail && <p className="error">{errors.adminEmail.message}</p>}
                    </div>

                    <div className="feild">
                        <label htmlFor="adminPassword">Password</label>
                        <input
                            type="password"
                            id='adminPassword'
                            {...register('adminPassword', { required: 'Password is required' })}
                        />
                        {errors.adminPassword && <p className="error">{errors.adminPassword.message}</p>}
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LoginAdmin;
