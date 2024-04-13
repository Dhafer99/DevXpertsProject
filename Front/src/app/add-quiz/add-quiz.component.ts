import { Component } from '@angular/core';
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
export class AddQuizComponent {
  newCategory: string;
  quiz: any = { title: '' }; // Initialize quiz object here

  constructor(private quizService: ClassroomService, private router: Router) {}

  onAddCategory() {
    this.quiz.title = this.newCategory;
    console.log(this.quiz);
    this.quizService.ajoutnewQuiz(this.quiz).subscribe({ });
    location.reload();
  }

}
