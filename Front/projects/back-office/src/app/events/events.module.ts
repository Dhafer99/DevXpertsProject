import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { EventListComponent } from './event-list/event-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsStatsComponent } from './events/events-stats/events-stats.component';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,ReactiveFormsModule,
    ChartModule,
    
    
  ]
})
export class EventsModule { }
