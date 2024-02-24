import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { ClassroomComponent } from './Appointment/classroom/classroom.component';
import { AfficherClassroomComponent } from './Appointment/afficher-classroom/afficher-classroom.component';
import { AddClassroomComponent } from './Appointment/add-classroom/add-classroom.component';
import { CalenderComponent } from './Appointment/calender/calender.component';
import { EventsComponent } from './events/events.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventsStatsComponent } from './events/events/events-stats/events-stats.component';
const routes: Routes = [  { path: 'list', component: ListUsersComponent },
{ path: 'classrooms', component: AfficherClassroomComponent },
{path: 'addclassroom', component: AddClassroomComponent },
{path: 'calender', component: CalenderComponent },
{path: 'create/:id', component: EventCreateComponent },
{path: 'create', component: EventCreateComponent },
{path: 'Eventlist', component: EventListComponent },
{path: 'stats', component: EventsStatsComponent },
{
  path: 'events',
  component: EventsComponent},

    { path: 'events/create/:id', component: EventCreateComponent },
    { path: 'events/create', component: EventCreateComponent },
    { path: 'events/Eventlist', component: EventListComponent },
    { path: 'events/stats', component: EventsStatsComponent },
    { path: 'events/""', pathMatch: 'full', redirectTo: '/events/create' },
    { path: 'events/**', component: EventCreateComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy:PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
