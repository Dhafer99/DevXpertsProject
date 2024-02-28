import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddPackComponent } from './PackManagementAdmin/add-pack/add-pack.component';
import { ViewPackComponent } from './PackManagementAdmin/view-pack/view-pack.component';
import { UpdatePackComponent } from './PackManagementAdmin/update-pack/update-pack.component';
import { HistoriquePacksComponent } from './PackManagementAdmin/historique-packs/historique-packs.component';
import { CommonModule } from '@angular/common';
import { ViewRoomsComponent } from './RoomManagement/view-rooms/view-rooms.component';
import { DetailRoomComponent } from './RoomManagement/detail-room/detail-room.component';
import { PackSalesPerYearComponent } from './PackManagementAdmin/pack-sales-per-year/pack-sales-per-year.component';

const routes: Routes = [  
  
  
  { path: 'list', component: ListUsersComponent },
{ path: 'addPack', component: AddPackComponent },
{ path: 'viewPack', component: ViewPackComponent },
{ path: 'viewPack/detail/:id', component: UpdatePackComponent },
{ path: 'HistoriquePacks', component: HistoriquePacksComponent },
{ path: 'viewRooms', component: ViewRoomsComponent },
{ path: 'viewRooms/detailRoom/:id', component: DetailRoomComponent },
{ path: 'packSalesPerYear', component: PackSalesPerYearComponent }

];




@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
