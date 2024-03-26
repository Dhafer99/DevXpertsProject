package com.example.appointementandclassroom.repositories;


import com.example.appointementandclassroom.entities.QuizApi;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizRepo extends JpaRepository<QuizApi, Long> {
}
