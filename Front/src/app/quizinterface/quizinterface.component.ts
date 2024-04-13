import { Component, OnInit } from '@angular/core';
import { Question } from '../model/Questions';
import { ServiceFront } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizinterface',
  templateUrl: './quizinterface.component.html',
  styleUrls: ['./quizinterface.component.css']
})

export class QuizinterfaceComponent implements OnInit{

  filterQuestionsByQuizName(quizName: string): void {
    this.service.getAllQuestions().subscribe(questions => {
      // Assuming each question has a category property
      this.questions = questions.filter(question => question.category === quizName);
      console.log("filtered Questions :")
      console.log(this.questions)
      console.log("quizName passed in param")
      console.log(quizName)
    });
  }

  quizName: string;
  // Define the array of all questions
 questions: Question[] = [];
  constructor(private service:ServiceFront,private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
    ///////////////////////////////THEME ///////////////////////////////////////////

    // Add a change event listener to the theme selector to handle theme changes
document.addEventListener('DOMContentLoaded', function() {
  let themeSelector: HTMLSelectElement | null = document.getElementById('theme-selector') as HTMLSelectElement;

  themeSelector?.addEventListener('change', function() {
    let buttons = document.getElementsByTagName('button');
    let quizContainers = document.getElementsByClassName('quiz-container');

    // Remove the existing theme class from the body, quiz containers, and buttons
    document.body.classList.remove('theme-default', 'theme-dark');
    for (let i = 0; i < quizContainers.length; i++) {
      (quizContainers[i] as HTMLElement).classList.remove('theme-default', 'theme-dark');
    }
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('theme-default', 'theme-dark');
    }

    // Add the selected theme class to the body, quiz containers, and buttons
    document.body.classList.add(this.value);
    for (let i = 0; i < quizContainers.length; i++) {
      (quizContainers[i] as HTMLElement).classList.add(this.value);
    }
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add(this.value);
    }

    // Save the selected theme in local storage
    localStorage.setItem('selectedTheme', this.value);
  });

  // Load the saved theme from local storage (if any)
  let savedTheme: string | null = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    themeSelector.value = savedTheme;
    var themeChangeEvent = new Event('change');
    themeSelector.dispatchEvent(themeChangeEvent);
  }
});



/////////////////////////////////////////////////////////////////////////////////////////



this.service.getAllQuestions().subscribe((data) => {

  this.route.paramMap.subscribe(params => {
    const quizName = params.get('quizName');
   

   // console.log(data);
    //this.questions=data 
    this.questions = data.filter(question => question.category === quizName);
    console.log(this.questions)
    const allQuestions= this.questions;
  // Variables to keep track of the quiz state
  let currentQuestion: number = 0;
  let score: number = 0;
  let answerSelected: boolean = false;
  
  // Get references to DOM elements
  let questionElement: HTMLElement | null = document.getElementById("question");
  let optionsElements: HTMLCollectionOf<Element> = document.getElementsByClassName("option");
  let scoreElement: HTMLElement | null = document.getElementById("score");
  let nextButton: HTMLElement | null = document.getElementById("next-button");
  let restartButton: HTMLElement | null = document.getElementById("restart-button");
  
  // Function to randomly select 5 questions from the allQuestions array
  function getRandomQuestions(): Question[] {
    let questionsCopy = [...allQuestions];
    let randomQuestions: Question[] = [];
    for (let i = 0; i < allQuestions.length; i++) {
      let index = Math.floor(Math.random() * questionsCopy.length);
      randomQuestions.push(questionsCopy[index]);
      questionsCopy.splice(index, 1);
    }
    return randomQuestions;
  }
  
    // Get random questions and initialize the quiz
  let questions: Question[] = getRandomQuestions();
  
  // Function to display the current question and options
  function showQuestion(): void {
    let question = questions[currentQuestion];
    if (questionElement)
      questionElement.textContent = question.question;
    for (let i = 0; i < optionsElements.length; i++) {
      let optionsElement = optionsElements[i] as HTMLElement;
      optionsElement.textContent = question.options[i];
      optionsElement.classList.remove("selected");
      optionsElement.style.display = "block";
    }
    answerSelected = false;
  }
  
  
  // Function to check if the selected answer is correct
  function checkAnswer(selectedOption: HTMLElement): void {
    if (!answerSelected) {
      selectedOption.classList.add("selected");
      let question = questions[currentQuestion];
      if (selectedOption.textContent === question.answer) {
        score++;
        if (scoreElement)
          scoreElement.textContent = score.toString();
      }
      answerSelected = true;
    }
  }
  
  // Function to display the next question or end the quiz if all questions are answered
  function showNextQuestion(): void {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to end the quiz, hide the questions and next button, and display the restart button
  function endQuiz(): void {
    if (questionElement)
      questionElement.textContent = "Quiz complete!";
    for (let i = 0; i < optionsElements.length; i++) {
      let optionsElement = optionsElements[i] as HTMLElement;
      optionsElement.style.display = "none";
    }
    if (nextButton)
      nextButton.style.display = "none";
    if (restartButton)
      restartButton.style.display = "block";
  }
  
  // Function to restart the quiz
  function restartQuiz(): void {
    score = 0;
    if (scoreElement)
      scoreElement.textContent = score.toString();
    currentQuestion = 0;
    if (nextButton)
      nextButton.style.display = "block";
    if (restartButton)
      restartButton.style.display = "none";
    questions = getRandomQuestions();
    showQuestion();
  }
  
  // Start the quiz
  restartQuiz();
  
  // Add click event listeners to the options
  for (let i = 0; i < optionsElements.length; i++) {
    let optionsElement = optionsElements[i] as HTMLElement;
    optionsElement.addEventListener("click", function() {
      checkAnswer(this);
    });
  }
  
  // Add click event listeners to the next and restart buttons
  nextButton!.addEventListener("click", showNextQuestion);
  restartButton!.addEventListener("click", restartQuiz);
  
  
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  })//subscribe








  });//filter 
  // Define the Question interface




 



  
}

}
