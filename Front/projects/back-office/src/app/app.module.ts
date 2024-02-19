import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ClassroomComponent } from './Appointment/classroom/classroom.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AfficherClassroomComponent } from './Appointment/afficher-classroom/afficher-classroom.component';
import { CardClassroomComponent } from './Appointment/card-classroom/card-classroom.component';
import { AddClassroomComponent } from './Appointment/add-classroom/add-classroom.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalenderComponent } from './Appointment/calender/calender.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { EventsComponent } from './events/events.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventDisplayComponent } from './events/event-display/event-display.component';
import { EventListComponent } from './events/event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ClassroomComponent,
    AfficherClassroomComponent,
    CardClassroomComponent,
    AddClassroomComponent,
    CalenderComponent,
    EventsComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScheduleModule ,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
