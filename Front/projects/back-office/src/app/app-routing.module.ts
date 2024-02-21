import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { AfficherOfferAdminComponent } from './offer/afficher-offer-admin/afficher-offer-admin.component';
import { AfficherCandidatureOffreAdminComponent } from './offer/afficher-candidature-offre-admin/afficher-candidature-offre-admin.component';

const routes: Routes = [  { path: 'list', component: ListUsersComponent },
{ path: 'admin/offers', component: AfficherOfferAdminComponent },
{ path: 'admin/offer/candidatures/:id', component: AfficherCandidatureOffreAdminComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
