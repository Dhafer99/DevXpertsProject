import { NgModule } from '@angular/core';
import { ListUsersComponent } from './list-users/list-users.component';
import { ClassroomComponent } from './Appointment/classroom/classroom.component';
import { AfficherClassroomComponent } from './Appointment/afficher-classroom/afficher-classroom.component';
import { AddClassroomComponent } from './Appointment/add-classroom/add-classroom.component';
import { CalenderComponent } from './Appointment/calender/calender.component';
import { UpdateClassroomComponent } from './Appointment/update-classroom/update-classroom.component';
import { ChatbotComponent } from './Appointment/chatbot/chatbot.component';
import { Calander2Component } from './Appointment/calander2/calander2.component';
import { RouterModule, Routes } from '@angular/router';
import { ImportFileComponent } from './Appointment/import-file/import-file.component';

const routes: Routes = [  { path: 'list', component: ListUsersComponent },
{ path: 'classrooms', component: AfficherClassroomComponent },
{path: 'addclassroom', component: AddClassroomComponent },
// {path: 'calender', component: CalenderComponent },
{path: 'addclassroom/:id', component:AddClassroomComponent  },
{path: 'chatBot', component:ChatbotComponent  },
{path: 'calander2', component:Calander2Component  },
{path: 'importfile', component:ImportFileComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
