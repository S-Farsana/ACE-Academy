package com.example.CourseRegistraton_Back.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.CourseRegistraton_Back.Model.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Long> {
    Optional<Admin> findByAdminEmail(String adminEmail);
}
