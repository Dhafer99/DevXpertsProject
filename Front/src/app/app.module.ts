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
import { QuizinterfaceComponent } from './quizinterface/quizinterface.component';
import { GeneralquizinterfaceComponent } from './generalquizinterface/generalquizinterface.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { TodoComponent } from './todo/todo.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CalenderComponent,
    DetailsComponent,
    QuizinterfaceComponent,
    GeneralquizinterfaceComponent,
    AddQuizComponent,
    TodoComponent,
    QuizDetailsComponent,

   
    
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
    BrowserAnimationsModule ,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
