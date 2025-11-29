package com.example.CourseRegistraton_Back.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.CourseRegistraton_Back.Model.Admin;
import com.example.CourseRegistraton_Back.Repository.AdminRepo;

@Component
public class AdminInitialiser implements CommandLineRunner {

    @Autowired
    private AdminRepo adminRepo;

    @Override
    public void run(String... args) throws Exception {

        String defaultEmail = "admin@gmail.com";

        if (adminRepo.findByAdminEmail(defaultEmail).isEmpty()) {

            Admin admin = new Admin();
            admin.setAdminEmail(defaultEmail);
            admin.setAdminPassword("admin");

            adminRepo.save(admin);

            System.out.println(" Default admin created successfully!");
        } else {
            System.out.println("ℹ Default admin already exists.");
        }
    }
}
