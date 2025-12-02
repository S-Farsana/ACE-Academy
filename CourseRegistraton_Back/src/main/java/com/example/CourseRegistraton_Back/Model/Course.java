package com.example.CourseRegistraton_Back.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Student> students;

}
