import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListUsersComponent } from 'projects/back-office/src/app/list-users/list-users.component';
import { ForumComponent } from './forum/forum.component';
import { ClaimComponent } from './claim/claim.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [  

  { path: 'profile', component: ProfileComponent },
  { path: 'backoffice', loadChildren: () => import ('../../projects/back-office/src/app/app.module').then(m => m.AppModule) },
  { path: 'forum', component: ForumComponent },
  { path: 'claim', component: ClaimComponent},
  { path: 'postForm', component: PostFormComponent},
  { path: 'postDetail/:id', component: PostDetailComponent},
  { path: 'updateForm', component: UpdateFormComponent},


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
