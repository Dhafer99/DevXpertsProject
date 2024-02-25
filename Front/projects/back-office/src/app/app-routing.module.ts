import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { AfficherOfferAdminComponent } from './offer/afficher-offer-admin/afficher-offer-admin.component';
import { AfficherCandidatureOffreAdminComponent } from './offer/afficher-candidature-offre-admin/afficher-candidature-offre-admin.component';
import { StatAdminCandidatureComponent } from './stat/stat-admin-candidature/stat-admin-candidature.component';

const routes: Routes = [  { path: 'list', component: ListUsersComponent },
{ path: 'admin/offers', component: AfficherOfferAdminComponent },
{ path: 'admin/offer/candidatures/:id', component: AfficherCandidatureOffreAdminComponent},
{ path: 'admin/stat',component: StatAdminCandidatureComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
