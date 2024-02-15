import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AfficherOffreComponent } from './offer/afficher-offre/afficher-offre.component';
import { AjouterOffreComponent } from './offer/ajouter-offre/ajouter-offre.component';
import { DetailOffreComponent } from './offer/detail-offre/detail-offre.component';

const routes: Routes = [  

  { path: 'profile', component: ProfileComponent },
  { path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app.module').then(m => m.AppModule) },
  { path: 'offers', component:AfficherOffreComponent },
  { path: 'addoffer', component:AjouterOffreComponent},
  { path: 'offers/:id', component:DetailOffreComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
