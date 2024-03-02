import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { ClaimBackofficeComponent } from './claim-backoffice/claim-backoffice.component';

const routes: Routes = [  
  { path: 'list', component: ListUsersComponent },
  { path: 'claims', component: ClaimBackofficeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
