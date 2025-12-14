import '../Pages/AddCourse.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function AddCourse() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    axios
    .post("http://localhost:8080/api/course", data)
    console.log('Submitted Sucessfully!', data);
    alert('Course added successfully!');
    reset();
  }

  return (
    <div className='mainAddCourse'>
      <h1 className="headingAddCourse">Add a New Course</h1>
      <div className='addCourseDiv'>
        <form onSubmit={handleSubmit(onSubmit)} className="formDataAddCourse">

          {/* Course Name */}
          <input
            type="text"
            className="feild feildAddCourse"
            placeholder="Enter Course Name"
            {...register('courseName', { required: 'Course name is required' })}
          />
          {errors.courseName && <p className="error">{errors.courseName.message}</p>}

          {/* Course Duration */}
          <input
            type="text"
            className="feild feildAddCourse"
            placeholder="Enter Course Duration (in months)"
            {...register('courseDuration', { required: 'Course duration is required' })}
          />
          {errors.courseDuration && <p className="error">{errors.courseDuration.message}</p>}

          {/* course fee */}
          <input
  type="number"
  className="feild feildAddCourse"
  placeholder="Enter Course Fee"
  {...register('courseFee', { required: 'Course fee is required' })}
/>
{errors.courseFee && <p className="error">{errors.courseFee.message}</p>}

          {/* Trainer Name */}
          <input
            type="text"
            className="feild feildAddCourse"
            placeholder="Enter Trainer Name"
            {...register('trainerName', { required: 'Trainer name is required' })}
          />
          {errors.trainerName && <p className="error">{errors.trainerName.message}</p>}

          {/* Buttons */}
  <button type="submit" className="btn btn-primary btnAddCourse"> Submit</button>
            {/* <Link to="../" className="btn btn-secondary cancel-btn">
            Cancel
          </Link> */}
          
        </form>
      </div>
    </div>
  );
}

export default AddCourse
