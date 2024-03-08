import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SupplierComponent } from './supplier/supplier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { BoothplacementComponent } from './boothplacement/boothplacement.component';
import { DragDropModule, CdkDrag } from '@angular/cdk/drag-drop';
import { DialogboxComponent } from './boothplacement/dialogbox/dialogbox.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SupplyRequestsDashboardComponent } from './supply-requests-dashboard/supply-requests-dashboard.component';

import { TranslateModule } from '@ngx-translate/core';

import { MessagestestComponent } from './messagestest/messagestest.component';
import { NewsupplyrequestsdashboardComponent } from './newsupplyrequestsdashboard/newsupplyrequestsdashboard.component';
import { MatTableModule } from '@angular/material/table';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';






@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    SupplierComponent,
    NotificationComponent,
    BoothplacementComponent,
    DialogboxComponent,
    SupplyRequestsDashboardComponent,
    MessagestestComponent,
    NewsupplyrequestsdashboardComponent,
    SupplierDetailComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    CommonModule,
    MatDialogModule,
    DialogModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  

   
  ],
  providers: [
  

  ],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
