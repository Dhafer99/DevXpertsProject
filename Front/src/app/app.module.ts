import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AfficherOffreComponent } from './offer/afficher-offre/afficher-offre.component';
import { HttpClientModule } from '@angular/common/http';
import { AjouterOffreComponent } from './offer/ajouter-offre/ajouter-offre.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailOffreComponent } from './offer/detail-offre/detail-offre.component';
import { ModifierOfferComponent } from './offer/modifier-offer/modifier-offer.component';
import { AfficherCandidatureComponent } from './candidature/afficher-candidature/afficher-candidature.component';
import { DetailCandidatureComponent } from './candidature/detail-candidature/detail-candidature.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AfficherOfferComponent } from './projects/back-office/offer/afficher-offer/afficher-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AfficherOffreComponent,
    AjouterOffreComponent,
    DetailOffreComponent,
    ModifierOfferComponent,
    AfficherCandidatureComponent,
    DetailCandidatureComponent,
    AfficherOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
