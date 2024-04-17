import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AfficherOffreComponent } from './offer/afficher-offre/afficher-offre.component';
import { AjouterOffreComponent } from './offer/ajouter-offre/ajouter-offre.component';
import { DetailOffreComponent } from './offer/detail-offre/detail-offre.component';
import { ModifierOfferComponent } from './offer/modifier-offer/modifier-offer.component';
import { AfficherCandidatureComponent } from './candidature/afficher-candidature/afficher-candidature.component';
import { AfficherCandidatursUserComponent } from './candidature/afficher-candidaturs-user/afficher-candidaturs-user.component';
import { AuthGuard } from './auth.guard';
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
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationinterfaceComponent } from './authenticationinterface/authenticationinterface.component';
export * from '../../projects/back-office/src/app/app.module'; // <==== THAT WAS MISSING
export * from '../../projects/back-office/src/app/supplier/supplier.component';
const routes: Routes = [  

  { path: 'signup', component: SignUpComponent },
  { path: 'auth', component: AuthenticationinterfaceComponent },
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},
  { path: 'offers', component:AfficherOffreComponent , canActivate: [AuthGuard]},
  { path: 'addoffer', component:AjouterOffreComponent , canActivate: [AuthGuard]},
  { path: 'offers/:id', component:DetailOffreComponent , canActivate: [AuthGuard]},
  { path: 'modifier/:id', component:ModifierOfferComponent , canActivate: [AuthGuard]},
  { path: 'offer/applications/:id', component:AfficherCandidatureComponent, canActivate: [AuthGuard]}, //exhibitor accep/refuse candidature
  { path: 'myapplications', component:AfficherCandidatursUserComponent, canActivate: [AuthGuard]},

  { path: 'message', component: MessagestestComponent, canActivate: [AuthGuard] },
  { path: 'profile/prof', component: ProfileComponent , canActivate: [AuthGuard]},
  { path: 'supplier/front', component: NewsupplierfrontComponent , canActivate: [AuthGuard]},
 
  
  { path: 'exhibitor/front', component: ExhibitorReservationComponent , canActivate: [AuthGuard]},
  //{ path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app-routing.module').then(m => m.AppRoutingModule) }



  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},
  { path: 'ListPacks', component: ListPacksComponent , canActivate: [AuthGuard]},
  { path: 'ListPacks/DetailPack/:typePack', component: DetailPackComponent , canActivate: [AuthGuard]},
  { path: 'MyPacks', component: MyPacksComponent , canActivate: [AuthGuard]},
  { path: 'ListPacks/ListRooms', component: RoomsListComponent , canActivate: [AuthGuard]},
  { path: 'auction/:id', component: AuctionRoomComponent , canActivate: [AuthGuard]},
  { path: 'auction/:id/roulette', component: RouletteComponent , canActivate: [AuthGuard]},
  { path: 'myRooms/:idRoom/:idCompany', component: MyRoomsComponent , canActivate: [AuthGuard]},
  { path: 'payments/:id', component: PaymentComponent , canActivate: [AuthGuard]},
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
