import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { EventListComponent } from './event-list/event-list.component';


@NgModule({
  declarations: [
    EventCreateComponent,
    EventDisplayComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
