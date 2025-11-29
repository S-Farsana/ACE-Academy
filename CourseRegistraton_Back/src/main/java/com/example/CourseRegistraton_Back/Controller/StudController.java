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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.CourseRegistraton_Back.Model.Student;
import com.example.CourseRegistraton_Back.Repository.StudentRepo;

@CrossOrigin("*")
// @CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/student")
public class StudController {

    @Autowired
    private StudentRepo studRepository;

    // REGISTER STUDENT
    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student stud) {
        Student newStud = studRepository.save(stud);
        return new ResponseEntity<>(newStud, HttpStatus.CREATED);
    }

    // VIEW STUDENTS
    @GetMapping()
    public ResponseEntity<List<Student>> getAllUsers() {
        List<Student> students = studRepository.findAll();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    // DELETE A STUDENT
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

/*
@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody Student loginData) {

    Student stud = studRepository.findByStudEmail(loginData.getStud_email());

    if (stud == null) {
        return new ResponseEntity<>("Email not found", HttpStatus.NOT_FOUND);
    }

    if (!stud.getStud_password().equals(loginData.getStud_password())) {
        return new ResponseEntity<>("Incorrect password", HttpStatus.UNAUTHORIZED);
    }

    return new ResponseEntity<>(stud, HttpStatus.OK);
} */

/*
Method	URL	Description
-------------------------
POST	    /api/student	    Register a student
GET	        /api/student	    Get all students
GET	        /api/student/{id}	Get one student
DELETE	    /api/student/{id}	Delete a student
 */