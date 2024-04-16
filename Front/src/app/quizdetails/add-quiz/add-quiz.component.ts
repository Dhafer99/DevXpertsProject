import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { aN } from '@fullcalendar/core/internal-common';
import { Category } from 'projects/back-office/src/app/models/category';
import { Quiz } from 'projects/back-office/src/app/models/quiz';
import { ClassroomService } from 'projects/back-office/src/app/services/classroom.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit{
  QuestionForm !: FormGroup;

  ngOnInit(): void {
    this.QuestionForm = new FormGroup({
      title: new FormControl(  '', Validators.required),
      category:new FormControl('',Validators.required), 
    
  })
}

  newCategory: String;
  quiz: any = { title: '' ,category:''}; // Initialize quiz object here
  
  constructor(private quizService: ClassroomService, private router: Router) {}

  onAddCategory() {
    this.quiz.title = this.newCategory;
    console.log(this.quiz);
    this.quizService.ajoutnewQuiz(this.QuestionForm).subscribe({ });
    
  }

  add() {
    this.quizService.ajoutnewQuiz(this.QuestionForm.value).subscribe({ });
    location.reload()
    }
}
