import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SupplierComponent } from './supplier/supplier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { BoothplacementComponent } from './boothplacement/boothplacement.component';
import { DragDropModule, CdkDrag } from '@angular/cdk/drag-drop';
import { DialogboxComponent } from './boothplacement/dialogbox/dialogbox.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SupplyRequestsDashboardComponent } from './supply-requests-dashboard/supply-requests-dashboard.component';

//import { TranslateModule } from '@ngx-translate/core';

import { MessagestestComponent } from './messagestest/messagestest.component';
import { NewsupplyrequestsdashboardComponent } from './newsupplyrequestsdashboard/newsupplyrequestsdashboard.component';
import { MatTableModule } from '@angular/material/table';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { SupplyRequestDetailsComponent } from './supply-request-details/supply-request-details.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';





import { ListUsersComponent } from './list-users/list-users.component';
import { AddPackComponent } from './PackManagementAdmin/add-pack/add-pack.component';
import { ViewPackComponent } from './PackManagementAdmin/view-pack/view-pack.component';
import { UpdatePackComponent } from './PackManagementAdmin/update-pack/update-pack.component';


import { HistoriquePacksComponent } from './PackManagementAdmin/historique-packs/historique-packs.component';
import { ViewRoomsComponent } from './RoomManagement/view-rooms/view-rooms.component';
import { DetailRoomComponent } from './RoomManagement/detail-room/detail-room.component';
import { PackSalesPerYearComponent } from './PackManagementAdmin/pack-sales-per-year/pack-sales-per-year.component';
import { AuctionComponent } from './auction/auction.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { PaymentListComponent } from './payment-list/payment-list.component';



@NgModule({
  declarations: [
    AppComponent,

   
    SupplierComponent,
    NotificationComponent,
    BoothplacementComponent,
    DialogboxComponent,
    SupplyRequestsDashboardComponent,
    MessagestestComponent,
    NewsupplyrequestsdashboardComponent,
    SupplierDetailComponent,
    SupplyRequestDetailsComponent,
    AuthentificationComponent,
  

    ListUsersComponent,
    AddPackComponent,
    ViewPackComponent,
    UpdatePackComponent,
    HistoriquePacksComponent,
    ViewRoomsComponent,
    DetailRoomComponent,
    PackSalesPerYearComponent,
    AuctionComponent,
    PaymentListComponent,
   

   
  ],
  imports: [
    CKEditorModule,
    BrowserModule,

    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    CommonModule,
    MatDialogModule,
  
    MatButtonModule,
    MatIconModule,
    MatTableModule
  

   

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
