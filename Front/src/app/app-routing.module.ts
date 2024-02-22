import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListUsersComponent } from 'projects/back-office/src/app/list-users/list-users.component';

const routes: Routes = [  

  { path: 'profile', component: ProfileComponent },
  { path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app.module').then(m => m.AppModule) }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


