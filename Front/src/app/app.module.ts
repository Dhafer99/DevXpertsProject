import { NgModule ,CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ListPacksComponent } from './PackageManagementUser/list-packs/list-packs.component';
import { DetailPackComponent } from './PackageManagementUser/detail-pack/detail-pack.component';
import { MyPacksComponent } from './PackageManagementUser/my-packs/my-packs.component';
import { RoomsListComponent } from './RoomManagementUser/rooms-list/rooms-list.component';
import { AuctionRoomComponent } from './RoomManagementUser/auction-room/auction-room.component';
import { MyRoomsComponent } from './RoomManagementUser/my-rooms/my-rooms.component';
import { PaymentComponent } from './payment/payment.component';
import { StripeModule } from 'stripe-angular';
import { RouletteComponent } from './RoomManagementUser/roulette/roulette.component';
import { NgxWheelModule } from 'ngx-wheel'; //<-- import here
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MessagestestComponent } from './messagestest/messagestest.component';
import { NewsupplierfrontComponent } from './newsupplierfront/newsupplierfront.component';
import { ExhibitorReservationComponent } from './exhibitor-reservation/exhibitor-reservation.component';
import { DragDropModule, CdkDrag } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { MatDialog } from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthenticationinterfaceComponent } from './authenticationinterface/authenticationinterface.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
         FooterComponent,
         MessagestestComponent,
         NewsupplierfrontComponent,
         ExhibitorReservationComponent,
         SupplierDetailComponent,
         DialogboxComponent,
         AuthenticationinterfaceComponent,
    ListPacksComponent,
    DetailPackComponent,
    MyPacksComponent,
    RoomsListComponent,
    AuctionRoomComponent,
    MyRoomsComponent,
    PaymentComponent,
    RouletteComponent,

  ],
  imports: [
    NgxWheelModule  ,
    BrowserModule,

    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule,
   HttpClientModule,
   DragDropModule,
   MatTooltipModule,
   BrowserAnimationsModule,
   MatNativeDateModule,
   MatDialogModule,
    AppRoutingModule,HttpClientModule,
    StripeModule.forRoot("pk_test_51OpCPlJKKu0bIqcHkJm13XGfPK7iBH0BHkBLr2K7AZG0tlw4RFMeXtVdFMbrgTXF1Pdu6r6hCOFlzmT2I3YlZOTV00FBNKzXAC"),

  ],
  providers: [ ],
  bootstrap: [AppComponent],
  schemas : [
    NO_ERRORS_SCHEMA]
})
export class AppModule { }
