import React, { useEffect, useState } from 'react'
import '../Pages/AddCourse.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function AddCourse() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted Sucessfully!', data);
    alert('Course added successfully!');
    reset();

  }

  return (
    <div >
      <h1 className="headings">Add a New Course</h1>
      <div className="course-container">
        <form onSubmit={handleSubmit(onSubmit)} className="formData">

          {/* Course Name */}
          <input
            type="text"
            className="feild"
            placeholder="Enter Course Name"
            {...register('courseName', { required: 'Course name is required' })}
          />
          {errors.courseName && <p className="error">{errors.courseName.message}</p>}

          {/* Course Duration */}
          <input
            type="text"
            className="feild"
            placeholder="Enter Course Duration (in months)"
            {...register('courseDuration', { required: 'Course duration is required' })}
          />
          {errors.courseDuration && <p className="error">{errors.courseDuration.message}</p>}

          {/* Trainer Name */}
          <input
            type="text"
            className="feild"
            placeholder="Enter Trainer Name"
            {...register('courseTrainer', { required: 'Trainer name is required' })}
          />
          {errors.courseTrainer && <p className="error">{errors.courseTrainer.message}</p>}

          {/* Buttons */}
          <div className="button-group">
            <button type="submit" className="btn btn-primary submit-btn">
              Submit
            </button>
            {/* <Link to="../" className="btn btn-secondary cancel-btn">
            Cancel
          </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse
