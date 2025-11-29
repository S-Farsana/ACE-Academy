import React, { useState } from 'react'
import '../Pages/StudentReg.css'
import { useForm } from 'react-hook-form'

function StudentReg() {
 

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted sucessfully!');
    alert("Registration is Sucess");
    reset();
  }

  return (
    <div className='MainBodyAbout'>
      <h1 className='headingsAbout'>Register   </h1>

      <div className='formDiv'>
        <form onSubmit={handleSubmit(onSubmit)} className='formData'>

          <input type='text'
            placeholder='Enter your Name'
            className='feild'
            {...register('stud_name',{required:'Student name required'})} />
            {errors.stud_name && <p className='error'>{errors.stud_name.message}</p> }

          <input
            type='email'
            placeholder='Enter your email'
            className='feild'
            {...register('stud_email',{required: 'email required'})}
             />
             {errors.stud_email && <p className='errror'>{errors.stud_email.message}</p>}

          <input
            type='number'
            placeholder='Mobile Number'
            className='feild'
            {...register('stud_mob',{required:'Mobile no.required'})}/>
            {errors.stud_mob && <p className='error'>{errors.stud_mob.message}</p>}


          <input
            type='text'
            placeholder='Enter Qualification'
            className='feild' 
            {...register('stud_qualification',{required:'Enter your qualification'})}/>
            {errors.stud_qualification && <p className='error'>{errors.stud_qualification.message}</p>}


          {/* <input
            type="text"
            name="studDateOfJoin"
            className="feild"
            onFocus={(e) => e.target.type = 'date'}
            onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
            placeholder="Enter Joining Date"
            {...register('studDateOfJoin',{required:'Enter the joining date'})}/>
            {errors.studDateOfJoin && <p className='error'>{errors.studDateOfJoin.message}</p>} */}
         

          <button type='submit' className="btn btn-primary btns1">Submit</button>

        </form>
      </div>
    </div>
    
  )
}

export default StudentReg
