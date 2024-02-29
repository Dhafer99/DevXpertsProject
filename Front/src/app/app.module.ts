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
import { CountdownComponentComponent } from './RoomManagementUser/countdown-component/countdown-component.component';
import { MyRoomsComponent } from './RoomManagementUser/my-rooms/my-rooms.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListPacksComponent,
    DetailPackComponent,
    MyPacksComponent,
    RoomsListComponent,
    AuctionRoomComponent,
    CountdownComponentComponent,
    MyRoomsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
