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
import { ChartModule } from 'angular-highcharts';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventsStatsComponent } from './events/events/events-stats/events-stats.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { EventDisplayComponent } from './events/event-display/event-display.component';

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
    EventCreateComponent,
    EventsStatsComponent,
    EventListComponent,
    EventDisplayComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScheduleModule ,
    ChartModule,
    NgbModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
