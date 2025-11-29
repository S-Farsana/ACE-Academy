package com.example.CourseRegistraton_Back.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.CourseRegistraton_Back.Model.Course;

@Repository

public interface CourseRepo extends JpaRepository<Course,Long> {}

