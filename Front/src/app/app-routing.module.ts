import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListUsersComponent } from 'projects/back-office/src/app/list-users/list-users.component';
import { PostListComponent } from './ForumManagement/post-list/post-list.component';
import { PostDetailComponent } from './ForumManagement/post-detail/post-detail.component';
import { ClaimFormComponent } from './ClaimManagement/claim-form/claim-form.component';
import { PostFormComponent } from './ForumManagement/post-form/post-form.component';
import { ClaimListComponent } from './ClaimManagement/claim-list/claim-list.component';


const routes: Routes = [  

  { path: 'profile', component: ProfileComponent },
  { path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app.module').then(m => m.AppModule) },
  { path: 'post-list', component: PostListComponent },
  { path: 'post-detail/:id', component: PostDetailComponent},
  { path: 'post-detail/:id', component: PostDetailComponent},
  { path: 'post-form', component: PostFormComponent},
  { path: 'claim-form', component: ClaimFormComponent},
  { path: 'claim-list', component: ClaimListComponent}



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
