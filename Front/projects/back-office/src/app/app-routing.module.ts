import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { ClassroomComponent } from './Appointment/classroom/classroom.component';
import { AfficherClassroomComponent } from './Appointment/afficher-classroom/afficher-classroom.component';
import { AddClassroomComponent } from './Appointment/add-classroom/add-classroom.component';
import { CalenderComponent } from './Appointment/calender/calender.component';
const routes: Routes = [  { path: 'list', component: ListUsersComponent },
{ path: 'classrooms', component: AfficherClassroomComponent },
{path: 'addclassroom', component: AddClassroomComponent },
{path: 'calender', component: CalenderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
