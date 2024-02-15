import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddPackComponent } from './PackManagementAdmin/add-pack/add-pack.component';
import { ViewPackComponent } from './PackManagementAdmin/view-pack/view-pack.component';
import { UpdatePackComponent } from './PackManagementAdmin/update-pack/update-pack.component';
import { HistoriquePacksComponent } from './PackManagementAdmin/historique-packs/historique-packs.component';

const routes: Routes = [  
  { path: '', redirectTo :'viewPack',pathMatch: "full" },
  { path: 'list', component: ListUsersComponent },
{ path: 'addPack', component: AddPackComponent },
{ path: 'viewPack', component: ViewPackComponent }
,{ path: 'DetailsPack/:id', component: UpdatePackComponent }
,{ path: 'HistoriquePacks', component: HistoriquePacksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
