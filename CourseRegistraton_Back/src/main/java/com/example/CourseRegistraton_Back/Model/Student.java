package com.example.CourseRegistraton_Back.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long stud_id;

    private String stud_name;
    
    @Column(name = "stud_email")

    private String studEmail;
    private String stud_mob;
    private String stud_qualification;
    @Column(name = "stud_password")
    private String studPassword;

    @ManyToOne
    @JoinColumn(name = "course_id")   // FK column
    @JsonBackReference
    private Course course;
}
