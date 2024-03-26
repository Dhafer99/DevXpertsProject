package com.example.appointementandclassroom.repositories;


import com.example.appointementandclassroom.entities.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepo extends JpaRepository<Question, Long> {


}
