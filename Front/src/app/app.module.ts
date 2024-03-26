import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CalenderComponent } from './calender/calender.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './details/details.component';
import { ALLquizComponent } from './allquiz/allquiz.component';
import { OnequizComponent } from './onequiz/onequiz.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CalenderComponent,
    DetailsComponent,
    ALLquizComponent,
    OnequizComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule, RecurrenceEditorModule
    ,HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScheduleModule,
    FullCalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ButtonsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
