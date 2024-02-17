import { Component } from '@angular/core';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-calender',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template: '<ejs-schedule> </ejs-schedule>',
 // templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
 // public selectedDate: Date = new Date(2018, 1, 15);
}
