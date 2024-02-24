import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListUsersComponent } from 'projects/back-office/src/app/list-users/list-users.component';
import { DisplayComponent } from './events/display/display.component';
import { EventsListComponent } from './events/events-list/events-list.component';

const routes: Routes = [  

  { path: 'profile', component: ProfileComponent },
  { path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app.module').then(m => m.AppModule) },
  { path: 'display/:name', component: DisplayComponent },
  { path: 'list', component: EventsListComponent },
  { path: 'events',
   loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },


  ];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
