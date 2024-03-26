package com.example.appointementandclassroom.repositories;


import com.example.appointementandclassroom.entities.QuestionOption;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionOptionRepo extends JpaRepository<QuestionOption, Long> {
}
