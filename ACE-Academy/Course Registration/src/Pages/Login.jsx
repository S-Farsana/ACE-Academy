import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../Pages/Login.css'

function Login() {
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
<label htmlFor='pwd'>Password   </label>
            <input type='password' name='pwd' value={pass} onChange={getPass} required></input>
            
            </div>
            

            <button type='submit' className="btn btn-primary">Submit</button>
        </form> */}

    const { register,
        handleSubmit,
        formState: { errors } 
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        alert("Sucess")
    };
    return (
        <div>
            <h1 className='headings'>Login</h1>
            <div className='loginDiv'>

            <form onSubmit={handleSubmit(onSubmit)} className="formData">
                <div className="feild">
                    <label htmlFor="username ">Username : </label>
                    <input type="text" {...register('username', { required: 'Username is required' })} />
                    {errors.username && (<p className="error">{errors.username.message}</p>)}
                </div>

                <div className="feild">
                    <label htmlFor="pwd">Password</label>
                    <input type="password"
                        {...register('pwd', { required: 'Password is required' })} />

                    {errors.pwd && (<p className="error">{errors.pwd.message}</p>)}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>

        </div>
    )
}

export default Login
