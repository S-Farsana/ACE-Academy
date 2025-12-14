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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.CourseRegistraton_Back.Model.Course;
import com.example.CourseRegistraton_Back.Repository.CourseRepo;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/course")
public class CourseController {

    @Autowired
    private CourseRepo courseRepo;

    // CREATE COURSE
    @PostMapping
    public ResponseEntity<Course> addCourse(@RequestBody Course course) {
        Course newCourse = courseRepo.save(course);
        return new ResponseEntity<>(newCourse, HttpStatus.CREATED);
    }

    // GET ALL COURSES (with student population)
    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = courseRepo.findAll();
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }

    // GET ONE COURSE BY ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getCourseById(@PathVariable Long id) {
        Optional<Course> courseOpt = courseRepo.findById(id);

        if (!courseOpt.isPresent()) {
            return new ResponseEntity<>("Course not found", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(courseOpt.get(), HttpStatus.OK);
    }

    // DELETE A COURSE
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long id) {
        Optional<Course> courseOpt = courseRepo.findById(id);

        if (!courseOpt.isPresent()) {
            return new ResponseEntity<>("Course not found", HttpStatus.NOT_FOUND);
        }

        courseRepo.deleteById(id);
        return new ResponseEntity<>("Course deleted successfully!", HttpStatus.OK);
    }

    // count of courses
    @GetMapping("/count")
    public ResponseEntity<Long> getCourseCount() {
        long count = courseRepo.count();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
}
