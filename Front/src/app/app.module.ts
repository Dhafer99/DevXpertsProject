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

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AfficherOffreComponent,
    AjouterOffreComponent,
    DetailOffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
