import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddPackComponent } from './PackManagementAdmin/add-pack/add-pack.component';
import { ViewPackComponent } from './PackManagementAdmin/view-pack/view-pack.component';
import { UpdatePackComponent } from './PackManagementAdmin/update-pack/update-pack.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HistoriquePacksComponent } from './PackManagementAdmin/historique-packs/historique-packs.component';
import { CreateRoomComponent } from './RoomManagement/create-room/create-room.component';
import { ViewRoomsComponent } from './RoomManagement/view-rooms/view-rooms.component';
import { DetailRoomComponent } from './RoomManagement/detail-room/detail-room.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddPackComponent,
    ViewPackComponent,
    UpdatePackComponent,
    HistoriquePacksComponent,
    CreateRoomComponent,
    ViewRoomsComponent,
    DetailRoomComponent
    ,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
