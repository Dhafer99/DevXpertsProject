import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ListUsersComponent } from "./list-users/list-users.component";
import { ClassroomComponent } from "./Appointment/classroom/classroom.component";
import { AfficherClassroomComponent } from "./Appointment/afficher-classroom/afficher-classroom.component";

import { AddClassroomComponent } from "./Appointment/add-classroom/add-classroom.component";
import { CalenderComponent } from "./Appointment/calender/calender.component";
import { UpdateClassroomComponent } from "./Appointment/update-classroom/update-classroom.component";
import { ChatbotComponent } from "./Appointment/chatbot/chatbot.component";
import { Calander2Component } from "./Appointment/calander2/calander2.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ScheduleModule } from "@syncfusion/ej2-angular-schedule";

import { NGB_DATEPICKER_DATE_ADAPTER_FACTORY } from "@ng-bootstrap/ng-bootstrap/datepicker/adapters/ngb-date-adapter";
import { FullCalendarModule } from "@fullcalendar/angular";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule } from '@angular/material/core';

import {NativeDateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field'

import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormFieldModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImportFileComponent } from './Appointment/import-file/import-file.component';
import { OnlineMeetingComponent } from './Appointment/online-meeting/online-meeting.component';
import { RouterModule } from "@angular/router";
import { QuizListComponent } from './Appointment/quiz-list/quiz-list.component';
import { AddquizComponent } from './Appointment/addquiz/addquiz.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ClassroomComponent,
    AfficherClassroomComponent,
    AddClassroomComponent,
    CalenderComponent,
    UpdateClassroomComponent,
    ChatbotComponent,
    Calander2Component,
    ImportFileComponent,
    OnlineMeetingComponent,
    QuizListComponent,
    AddquizComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScheduleModule,
    FullCalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    IntlModule,
    LabelModule,
    ButtonsModule,
    DateInputsModule,
    FormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    IconsModule,
    BrowserAnimationsModule,
    RouterModule

    
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    NativeDateAdapter
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
