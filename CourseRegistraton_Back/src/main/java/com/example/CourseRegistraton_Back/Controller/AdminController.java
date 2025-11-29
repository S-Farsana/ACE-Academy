package com.example.CourseRegistraton_Back.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.CourseRegistraton_Back.Model.Admin;
import com.example.CourseRegistraton_Back.Repository.AdminRepo;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private AdminRepo adminRepo;

    @PostMapping("/login")
    public Object loginAdmin(@RequestBody Admin admin) {

        return adminRepo.findByAdminEmail(admin.getAdminEmail())
                .filter(a -> a.getAdminPassword().equals(admin.getAdminPassword()))
                .<Object>map(a -> a)
                .orElse("Invalid email or password!");
    }
}