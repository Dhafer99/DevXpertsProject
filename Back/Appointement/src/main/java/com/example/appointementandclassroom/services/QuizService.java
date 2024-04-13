package com.example.appointementandclassroom.services;

import com.example.appointementandclassroom.entities.*;
import com.example.appointementandclassroom.repositories.QuestionRepo;
import com.example.appointementandclassroom.repositories.QuizRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuizService implements  IQuizService{
    @Autowired
    private QuizRepo quizRepo;
    @Autowired
    private QuestionRepo questionRepo ;

    @Override
    public Quiz createQuiz(QuizCreate quizCreate) {
        // A3tiinii les qustions bill categorie ou 9adeeh men question
        List<Question> questions = questionRepo.findRandomQuestionsByCategory(quizCreate.getCategory(), quizCreate.getNumQ());

        Quiz quiz = new Quiz();
        quiz.setTitle(quizCreate.getTitle());
        quiz.setQuestions(questions);

        return     quizRepo.save(quiz);

    }


    @Override
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestion(Integer id) {
        Optional<Quiz> quiz = quizRepo.findById(id);
        List<Question> questionsFromDB = quiz.get().getQuestions();
        List<QuestionWrapper> questionsForUser = new ArrayList<>();
    for(Question q: questionsFromDB)
    {
        QuestionWrapper qw = new QuestionWrapper(q.getId() , q.getQuestion() , q.getOptions());
        questionsForUser.add(qw);
    }


        return  new ResponseEntity<>(questionsForUser,HttpStatus.OK );
    }

    @Override
    public ResponseEntity<Integer> CalculateResult(Integer id, List<Response> responses) {
        Quiz  quiz = quizRepo.findById(id).get();
        List<Question> questions = quiz.getQuestions();
        int right =0 ;
        int i =0 ;
        for(Response response : responses){

            if(response.getResponses().equals(questions.get(i).getAnswer()))
                right ++ ;
            i++ ;
        }
        return  new ResponseEntity<>(right,HttpStatus.OK );
    }

    @Override
    public List<Quiz> getAllquiz() {
        return quizRepo.findAll();
    }

    @Override
    public List<Quiz> getQuizzesByCategory(String category) {
        //return quizRepo.findByCategory(category);
        return null;
    }
// tesstt
    @Override
    public void addQuiz(Quiz quiz) {
         quizRepo.save(quiz);
    }

    @Override
    public List<Quiz> afficheAllQuiz() {
        return quizRepo.findAll();
    }

    @Override
    public Quiz AfficheuneQuiz(int id) {
        return quizRepo.findById(id).orElse(null);
    }

    @Override
    public void deleateQuiz(int id) {
        quizRepo.deleteById(id);
    }


}
