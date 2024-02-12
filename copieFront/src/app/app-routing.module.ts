import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListUsersComponent } from 'projects/back-office/src/app/list-users/list-users.component';
import { App1SharedModule } from '../../projects/back-office/src/app/app.module';
import { App2SharedModule } from '../../projects/front-office/src/app/app.module';

const routes: Routes = [  

  
  {path: 'app1', loadChildren:() => App1SharedModule },
  {path: 'app2', loadChildren:() => App2SharedModule},

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
   // App1SharedModule.forRoot(),
   // App2SharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
