import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListPacksComponent } from './PackageManagementUser/list-packs/list-packs.component';
import { DetailPackComponent } from './PackageManagementUser/detail-pack/detail-pack.component';
import { MyPacksComponent } from './PackageManagementUser/my-packs/my-packs.component';
import { RoomsListComponent } from './RoomManagementUser/rooms-list/rooms-list.component';
import { AuctionRoomComponent } from './RoomManagementUser/auction-room/auction-room.component';
import { MyRoomsComponent } from './RoomManagementUser/my-rooms/my-rooms.component';
import { PaymentComponent } from './payment/payment.component';
import { RouletteComponent } from './RoomManagementUser/roulette/roulette.component';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from '../../projects/back-office/src/app/supplier/supplier.component';
import { NewsupplierfrontComponent } from './newsupplierfront/newsupplierfront.component';
import { ExhibitorReservationComponent } from './exhibitor-reservation/exhibitor-reservation.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { MessagestestComponent } from './messagestest/messagestest.component';
export * from '../../projects/back-office/src/app/app.module'; // <==== THAT WAS MISSING
export * from '../../projects/back-office/src/app/supplier/supplier.component';
const routes: Routes = [  

  { path: 'message', component: MessagestestComponent },
  { path: 'profile/prof', component: ProfileComponent },
  { path: 'supplier/front', component: NewsupplierfrontComponent },
 
  
  { path: 'exhibitor/front', component: ExhibitorReservationComponent },
  //{ path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app-routing.module').then(m => m.AppRoutingModule) }



  { path: 'profile', component: ProfileComponent },
  { path: 'ListPacks', component: ListPacksComponent },
  { path: 'ListPacks/DetailPack/:typePack', component: DetailPackComponent },
  { path: 'MyPacks', component: MyPacksComponent },
  { path: 'ListPacks/ListRooms', component: RoomsListComponent },
  { path: 'auction/:id', component: AuctionRoomComponent },
  { path: 'auction/:id/roulette', component: RouletteComponent },
  { path: 'myRooms/:idRoom/:idCompany', component: MyRoomsComponent },
  { path: 'payments/:id', component: PaymentComponent },
  { path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app.module').then(m => m.AppModule) }
  
  
  
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
   
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
