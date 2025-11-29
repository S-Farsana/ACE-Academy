import React, { useEffect, useState } from 'react'
import '../Pages/AddCourse.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from "axios";

function AddCourse() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/api/course", data)
      .then(res => {
        console.log('Submitted Successfully!', res.data);
        alert('Course added successfully!');
        reset();
      })
      .catch(err => {
        console.error("Error posting data:", err);
        alert("Failed to register. Try Again.");
      });
  };

  return (
    <div className='MainBodyAbout'>
      <h1 className="headingsAbout">Add a New Course</h1>

      <div className="course-container">
        <form onSubmit={handleSubmit(onSubmit)} className="formData">

          {/* Course Name */}
          <input
            type="text"
            className="feild"
            placeholder="Enter Course Name"
            {...register('course_name', { required: 'Course name is required' })}
          />
          {errors.course_name && <p className="error">{errors.course_name.message}</p>}

          {/* Course Duration */}
          <input
            type="number"
            className="feild"
            placeholder="Enter Course Duration (in months)"
            {...register('course_duration', { required: 'Course duration is required' })}
          />
          {errors.course_duration && <p className="error">{errors.course_duration.message}</p>}

          {/* Course Fee */}
          <input
            type="number"
            className="feild"
            placeholder="Enter Course Fee (in Rs)"
            {...register('course_fee', { required: 'Course Fee is required' })}
          />
          {errors.course_fee && <p className="error">{errors.course_fee.message}</p>}

          {/* Trainer Name */}
          <input
            type="text"
            className="feild"
            placeholder="Enter Trainer Name"
            {...register('trainer_name', { required: 'Trainer name is required' })}
          />
          {errors.trainer_name && <p className="error">{errors.trainer_name.message}</p>}

          {/* Buttons */}
          <div className="button-group">
            <button type="submit" className="btn btn-primary submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;