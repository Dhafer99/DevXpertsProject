import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CalenderComponent } from './calender/calender.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CalenderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
