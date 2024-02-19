import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  {
    path: '', 
    component: EventsComponent,
    children: [
      { path: 'create', component: EventCreateComponent },
      { path: 'display', component: EventDisplayComponent },
      { path: 'list', component: EventListComponent },
      { path: '', pathMatch: 'full', redirectTo: '/events/create' },
      { path: '**', component: EventCreateComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
