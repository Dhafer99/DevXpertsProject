import { NgModule } from '@angular/core';
import { ListUsersComponent } from './list-users/list-users.component';
import { ClassroomComponent } from './Appointment/classroom/classroom.component';
import { AfficherClassroomComponent } from './Appointment/afficher-classroom/afficher-classroom.component';
import { AddClassroomComponent } from './Appointment/add-classroom/add-classroom.component';

import { UpdateClassroomComponent } from './Appointment/update-classroom/update-classroom.component';
import { ChatbotComponent } from './Appointment/chatbot/chatbot.component';
import { Calander2Component } from './Appointment/calander2/calander2.component';
import { RouterModule, Routes } from '@angular/router';

import { OnlineMeetingComponent } from './Appointment/online-meeting/online-meeting.component';
import { quartersInYear } from 'date-fns';
import { QuizComponent } from './Appointment/quiz/quiz.component';

import { QuestionListComponent } from './Appointment/question-list/question-list.component';
import { QuizListComponent } from './Appointment/quiz-list/quiz-list.component';
import { AddroulsComponent } from './Appointment/addrouls/addrouls.component';


const routes: Routes = [  { path: 'list', component: ListUsersComponent },
{ path: 'classrooms', component: AfficherClassroomComponent },
{path: 'addclassroom', component: AddClassroomComponent },
// {path: 'calender', component: CalenderComponent },
{path: 'addclassroom/:id', component:AddClassroomComponent  },
{path: 'chatBot', component:ChatbotComponent  },
{path: 'calander2', component:Calander2Component  },
{path: 'OnlineMeeting/:idroom', component:OnlineMeetingComponent  },
{path: 'quiz', component:QuizComponent  },
{path: 'listequiz', component:QuizListComponent  },
{path: 'listequestion', component: QuestionListComponent },
{path: 'addroule', component: AddroulsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
