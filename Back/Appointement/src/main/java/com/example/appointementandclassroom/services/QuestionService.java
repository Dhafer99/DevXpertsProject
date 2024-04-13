package com.example.appointementandclassroom.services;

import com.example.appointementandclassroom.entities.Question;
import com.example.appointementandclassroom.repositories.QuestionRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuestionService implements  IQuestionService{

    @Autowired
    private QuestionRepo questionRepo ;


    @Override
    public List<Question> getAllQuestion() {
        return questionRepo.findAll();
    }

    @Override
    public List<Question> getQuestionByCategory(String category) {
        return questionRepo.findByCategory(category);
    }

    @Override
    public Question addQuestion(Question question) {
        return questionRepo.save(question);
    }
}
