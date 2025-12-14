import '../Pages/Register.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';

function Register() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  

  const onSubmit=(data)=>{
  axios
.post("http://localhost:8080/api/student",data)
     .then((res) =>{
       console.log(res.data)
      alert("Registration is successful!");
      reset();
     })
    .catch(err => console.error(err));
  };

  return (
    <div className='mainRegister'>
      <h1 className='headingRegister'>Register Yourself</h1>

      <div className='registerDiv'>
        <form onSubmit={handleSubmit(onSubmit)} className='registerFormData'>

          <input type='text'
            placeholder='Enter your Name'
            className='feild registerFeild '
            {...register('stud_name', { required: 'Student name required' })} />
          {errors.stud_name && <p className='error'>{errors.stud_name.message}</p>}

          <input
            type='email'
            placeholder='Enter your email'
            className='feild registerFeild'
            {...register('studEmail', { required: 'email required' })}
          />
          {errors.studEmail && <p className='errror'>{errors.studEmail.message}</p>}

          <input
            type='number'
            placeholder='Mobile Number'
            className='feild registerFeild'
            {...register('stud_mob', { required: 'Mobile no.required' })} />
          {errors.stud_mob && <p className='error'>{errors.stud_mob.message}</p>}

          <input
            type='text'
            placeholder='Enter highest Qualification'
            className='feild registerFeild'
            {...register('stud_qualification', { required: 'Enter your  qualification' })} />
          {errors.stud_qualification && <p className='error'>{errors.stud_qualification.message}</p>}

          <input type="password"
            placeholder='Create a password'
            className='feild registerFeild'
            {...register('studPassword', { required: 'Password is required' })} />

          {errors.studPassword && (<p className="error">{errors.studPassword.message}</p>)}
      <button type='submit' className="btn btn-primary btnRegister">Submit</button>
    </form>
              </div >
              </div>
            
    
  )
}

export default Register
