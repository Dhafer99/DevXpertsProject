import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
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
    AppRoutingModule,HttpClientModule,
    StripeModule.forRoot("pk_test_51OpCPlJKKu0bIqcHkJm13XGfPK7iBH0BHkBLr2K7AZG0tlw4RFMeXtVdFMbrgTXF1Pdu6r6hCOFlzmT2I3YlZOTV00FBNKzXAC")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
