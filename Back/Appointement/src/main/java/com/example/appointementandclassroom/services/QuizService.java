package com.example.appointementandclassroom.services;

import com.example.appointementandclassroom.entities.ApiOpenquizzdb;
import com.example.appointementandclassroom.entities.Question;
import com.example.appointementandclassroom.entities.QuestionOption;
import com.example.appointementandclassroom.entities.QuizApi;
import com.example.appointementandclassroom.repositories.QuizRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@Service
public class QuizService implements IQuizService{
 QuizRepo quizRepo;
    @Override
    public List<QuizApi> retrieveAllQuizs() {
        return quizRepo.findAll();
    }

    @Override
    public QuizApi retrieveQuiz(Long quizId) {
        return quizRepo.findById(quizId).orElse(null);
    }

    @Override
    public String addTest(QuizApi test) {
        Set<Question> questions=new HashSet<>();
        for (Question q:test.getQuestions()) {
            questions.add(q);
            Set<QuestionOption> options=new HashSet<>();
            for (QuestionOption o:q.getQuestionOptions())
                options.add(o);
            q.setQuestionOptions(options);
        }
        test.setActive(true);
        test.setQuestions(questions);
        quizRepo.save(test);

        return "test added succesfuly";
    }


    @Override
    public void addtestwithapi(List<ApiOpenquizzdb> apiOpenquizzdbs) {
        QuizApi test=new QuizApi();
        ApiOpenquizzdb anyone =apiOpenquizzdbs.get(0);
        test.setTitle(anyone.getCategorie());
        test.setDescription("a simple test about "+anyone.getCategorie()+" in"+anyone.getLangue()+" and the difficulti is : "+anyone.getDifficulte());
        test.setImage("assets/img/quiz/"+anyone.getCategorie()+".png");
        Set<Question> questions=new HashSet<>();
        for (ApiOpenquizzdb q : apiOpenquizzdbs) {
            Question question = new Question();
            question.setQuestion(q.getQuestion());
            question.setImage(q.getTheme());
            Set<QuestionOption> options = new HashSet<>();
            String[] propositions = q.getAutres_choix();
            String ans = q.getReponse_correcte();
            for (String proposition : propositions) {
                QuestionOption option = new QuestionOption();
                option.setAnswer(proposition);
                if (option.getAnswer().equals(ans)) {
                    option.setIscorrect(true);
                } else {
                    option.setIscorrect(false);
                }
                options.add(option);
            }

            question.setQuestionOptions(options);
            questions.add(question);
        }
        test.setActive(true);
        test.setQuestions(questions);
        quizRepo.save(test);

    }
}
