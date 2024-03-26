package com.example.appointementandclassroom.services;

import com.example.appointementandclassroom.entities.ApiOpenquizzdb;
import com.example.appointementandclassroom.entities.QuizApi;

import java.util.List;

public interface IQuizService {


    public List<QuizApi> retrieveAllQuizs();
    public QuizApi retrieveQuiz(Long quizId);
    public String addTest(QuizApi test);
    public void addtestwithapi(List<ApiOpenquizzdb> apiOpenquizzdbs);



}
