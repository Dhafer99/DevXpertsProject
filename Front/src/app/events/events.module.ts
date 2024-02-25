import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { DisplayComponent } from './display/display.component';
import { RouterModule } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DisplayComponent,
    EventsListComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ]
})
export class EventsModule { }
