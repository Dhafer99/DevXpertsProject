import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

import { CalenderComponent } from './calender/calender.component';
import { ListUsersComponent } from 'projects/back-office/src/app/list-users/list-users.component';
import { DetailsComponent } from './details/details.component';
import { ALLquizComponent } from './allquiz/allquiz.component';
import { OnequizComponent } from './onequiz/onequiz.component';

const routes: Routes = [  
  { path: 'calender', component: CalenderComponent },
  { path: 'Details', component: DetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'allquiz', component: ALLquizComponent },
  { path: 'onequiz/:id', component: OnequizComponent },
  { path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app.module').then(m => m.AppModule) },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


