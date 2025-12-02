package com.example.CourseRegistraton_Back.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.CourseRegistraton_Back.Model.Admin;
import com.example.CourseRegistraton_Back.Repository.AdminRepo;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private AdminRepo adminRepo;

    @PostMapping("/login")
    public ResponseEntity<?> loginAdmin(@RequestBody Admin admin) {

        return adminRepo.findByAdminEmail(admin.getAdminEmail())
                .filter(a -> a.getAdminPassword().equals(admin.getAdminPassword()))
                .<ResponseEntity<?>>map(a -> ResponseEntity.ok(a)) // return admin object
                .orElse(ResponseEntity.status(400).body("Invalid email or password!")); // return 400 error
    }
}
