package com.example.CourseRegistraton_Back.Controller;

import java.util.List;
import java.util.Map;
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
@RequestMapping("/api/student")
public class StudController {

    @Autowired
    private StudentRepo studRepository;

    @Autowired
    private CourseRepo courseRepository;


    // ADD STUDENT
   
     @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        Student newStudent = studRepository.save(student);
        return new ResponseEntity<>(newStudent,HttpStatus.CREATED);
    }
    //Add endpoint to ENROLL student in a course

    @PutMapping("/{stud_id}/enroll/{course_id}")
public ResponseEntity<?> enrollCourse(
        @PathVariable Long stud_id,
        @PathVariable Long course_id) {

    Student student = studRepository.findById(stud_id)
            .orElse(null);
    Course course = courseRepository.findById(course_id)
            .orElse(null);

    if (student == null || course == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("error", "Student or Course not found"));
    }

    if (student.getCourses().contains(course)) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(Map.of("message", "Already Enrolled"));
    }

    student.getCourses().add(course);
    studRepository.save(student);

    return ResponseEntity.ok(student);
}

    // VIEW STUDENTS
    @GetMapping()
    public ResponseEntity<List<Student>> getAllUsers() {
        List<Student> students = studRepository.findAll();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    // DELETE STUDENT
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        Optional<Student> delStud = studRepository.findById(id);

        if (delStud.isPresent()) {
            studRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // STUDENT LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Student loginData) {
        Optional<Student> studentOpt = studRepository.findByStudEmail(loginData.getStudEmail());

        if (!studentOpt.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("error", "Email not found"));
        }

        Student student = studentOpt.get();

        if (!student.getStudPassword().equals(loginData.getStudPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Incorrect password"));
        }

        return ResponseEntity.ok(student);
    }
}
