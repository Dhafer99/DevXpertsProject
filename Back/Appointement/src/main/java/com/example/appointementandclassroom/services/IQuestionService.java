package com.example.appointementandclassroom.services;

import com.example.appointementandclassroom.entities.Question;

import java.util.List;

public interface IQuestionService {

public List<Question> getAllQuestion();

    List<Question> getQuestionByCategory(String category);
    public Question addQuestion(Question question);
}
