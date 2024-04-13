package com.example.appointementandclassroom.repositories;

import com.example.appointementandclassroom.entities.Question;
import com.example.appointementandclassroom.entities.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepo extends JpaRepository<Quiz, Integer> {

   // List<Quiz> findByCategory(String category);
}
