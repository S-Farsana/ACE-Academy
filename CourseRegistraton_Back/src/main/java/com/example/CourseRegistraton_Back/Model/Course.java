package com.example.CourseRegistraton_Back.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Data;

@Entity
@Data
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long course_id;

    private String course_name;
    private int course_duration;
    private double course_fee;
    private String trainer_name;

   @ManyToMany(mappedBy = "courses")
   @JsonIgnore
private List<Student> students;
    // @JsonManagedReference
    // private List<Student> students;

}
