package com.example.CourseRegistraton_Back.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.CourseRegistraton_Back.Model.Student;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long> {

    Optional<Student> findByStudEmail(String studEmail);
    
}