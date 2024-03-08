import { NgModule ,CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

import { SupplierFrontComponent } from './supplier-front/supplier-front.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MessagestestComponent } from './messagestest/messagestest.component';
import { NewsupplierfrontComponent } from './newsupplierfront/newsupplierfront.component';
import { ExhibitorReservationComponent } from './exhibitor-reservation/exhibitor-reservation.component';
import { DragDropModule, CdkDrag } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
   
    SupplierFrontComponent,
         HeaderComponent,
         FooterComponent,
         MessagestestComponent,
         NewsupplierfrontComponent,
         ExhibitorReservationComponent,
         SupplierDetailComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
   HttpClientModule,
   DragDropModule,
   MatTooltipModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [
    NO_ERRORS_SCHEMA]
})
export class AppModule { }
