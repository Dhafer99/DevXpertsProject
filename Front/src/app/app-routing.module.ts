import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

import { CalenderComponent } from './calender/calender.component';
import { ListUsersComponent } from 'projects/back-office/src/app/list-users/list-users.component';
import { DetailsComponent } from './details/details.component';
import { QuizinterfaceComponent } from './quizinterface/quizinterface.component';
import { GeneralquizinterfaceComponent } from './generalquizinterface/generalquizinterface.component';
import { TodoComponent } from './todo/todo.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';


const routes: Routes = [  
  { path: 'calender', component: CalenderComponent },
  { path: 'Details', component: DetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'quiztest', component: QuizinterfaceComponent },
  { path: 'quizgeneral', component: GeneralquizinterfaceComponent },
  { path: 'todo', component: TodoComponent},
  { path: 'addquiz', component:AddQuizComponent},
  { path: 'quizdetail/:id', component:QuizDetailsComponent},

  
  { path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app.module').then(m => m.AppModule) },



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


