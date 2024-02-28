import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AfficherOffreComponent } from './offer/afficher-offre/afficher-offre.component';
import { AjouterOffreComponent } from './offer/ajouter-offre/ajouter-offre.component';
import { DetailOffreComponent } from './offer/detail-offre/detail-offre.component';
import { ModifierOfferComponent } from './offer/modifier-offer/modifier-offer.component';
import { AfficherCandidatureComponent } from './candidature/afficher-candidature/afficher-candidature.component';
import { AfficherCandidatursUserComponent } from './candidature/afficher-candidaturs-user/afficher-candidaturs-user.component';

const routes: Routes = [  
  { path: 'profile', component: ProfileComponent },
  { path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app.module').then(m => m.AppModule) },
  { path: 'offers', component:AfficherOffreComponent},
  { path: 'addoffer', component:AjouterOffreComponent},
  { path: 'offers/:id', component:DetailOffreComponent},
  { path: 'modifier/:id', component:ModifierOfferComponent},
  { path: 'offer/applications/:id', component:AfficherCandidatureComponent}, //exhibitor accep/refuse candidature
  { path: 'myapplications', component:AfficherCandidatursUserComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
