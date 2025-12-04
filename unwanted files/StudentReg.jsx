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
    <div>
      <h1 className='headings'>Register for "a Course"</h1>

      <div className='formDiv'>
        <form onSubmit={handleSubmit(onSubmit)} className='formData'>

          <input type='text'
            placeholder='Enter your Name'
            className='feild'
            {...register('studName',{required:'Student name required'})} />
            {errors.studName && <p className='error'>{errors.studName.message}</p> }

          <input
            type='email'
            placeholder='Enter your email'
            className='feild'
            {...register('studMail',{required: 'email required'})}
             />
             {errors.studMail && <p className='errror'>{errors.studMail.message}</p>}

          <input
            type='number'
            placeholder='Mobile Number'
            className='feild'
            {...register('studMob',{required:'Mobile no.required'})}/>
            {errors.studMob && <p className='error'>{errors.studMob.message}</p>}


          <input
            type='text'
            placeholder='Enter Qualification'
            className='feild' 
            {...register('studQualification',{required:'Enter your qualification'})}/>
            {errors.studQualification && <p className='error'>{errors.studQualification.message}</p>}


          <input
            type="text"
            name="studDateOfJoin"
            className="feild"
            onFocus={(e) => e.target.type = 'date'}
            onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
            placeholder="Enter Joining Date"
            {...register('studDateOfJoin',{required:'Enter the joining date'})}/>
            {errors.studDateOfJoin && <p className='error'>{errors.studDateOfJoin.message}</p>}
         

          <button type='submit' className="btn btn-primary btns1">Submit</button>

        </form>
      </div>
    </div>
    
  )
}

export default StudentReg
