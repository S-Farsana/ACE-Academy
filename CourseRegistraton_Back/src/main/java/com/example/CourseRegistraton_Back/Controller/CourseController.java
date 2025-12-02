package com.example.CourseRegistraton_Back.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.CourseRegistraton_Back.Model.Course;
import com.example.CourseRegistraton_Back.Model.Student;
import com.example.CourseRegistraton_Back.Repository.CourseRepo;
import com.example.CourseRegistraton_Back.Repository.StudentRepo;



@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class CourseController {

    @Autowired
    private CourseRepo courseRepo;

    @Autowired
private StudentRepo studentRepo;
    // REGISTER COURSE
    @PostMapping("/course")
    public ResponseEntity<Course> addCourse(@RequestBody Course course) {
        Course savedCourse = courseRepo.save(course);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    // GET ALL COURSES
    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courseList = courseRepo.findAll();
        return new ResponseEntity<>(courseList, HttpStatus.OK);
    }

    // GET COURSE BY ID
    @GetMapping("/course/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        Optional<Course> savedCourse = courseRepo.findById(id);

        if (savedCourse.isPresent()) {
            return new ResponseEntity<>(savedCourse.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // UPDATE COURSE
    @PutMapping("/course/{id}")
    public ResponseEntity<Course> updateCourse(
            @PathVariable Long id,
            @RequestBody Course newData) {

        Optional<Course> existingCourse = courseRepo.findById(id);

        if (existingCourse.isPresent()) {

            Course course = existingCourse.get();

            // update fields
            course.setCourse_name(newData.getCourse_name());
            course.setCourse_duration(newData.getCourse_duration());
            course.setCourse_fee(newData.getCourse_fee());
            course.setTrainer_name(newData.getTrainer_name());

            Course updatedCourse = courseRepo.save(course);

            return new ResponseEntity<>(updatedCourse, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    //DELETE A COURSE
    @DeleteMapping("/course/{id}")
    public ResponseEntity<Void> delCourse(@PathVariable Long id) {
        Optional<Course> savedCourse = courseRepo.findById(id);
        if (savedCourse.isPresent()) {
            courseRepo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
}
