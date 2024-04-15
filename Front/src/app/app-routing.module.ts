import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { ListUsersComponent } from 'projects/back-office/src/app/list-users/list-users.component';
import { DisplayComponent } from './events/display/display.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { InitialListEventComponent } from './events/initial-list-event/initial-list-event.component';
=======
import { AfficherOffreComponent } from './offer/afficher-offre/afficher-offre.component';
import { AjouterOffreComponent } from './offer/ajouter-offre/ajouter-offre.component';
import { DetailOffreComponent } from './offer/detail-offre/detail-offre.component';
import { ModifierOfferComponent } from './offer/modifier-offer/modifier-offer.component';
import { AfficherCandidatureComponent } from './candidature/afficher-candidature/afficher-candidature.component';
import { AfficherCandidatursUserComponent } from './candidature/afficher-candidaturs-user/afficher-candidaturs-user.component';
>>>>>>> main

  
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
<<<<<<< HEAD
  {path:'' ,redirectTo:'index',pathMatch:'full'},
  { path: 'profile', component: ProfileComponent },
  { path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app.module').then(m => m.AppModule) },
  { path: 'display/:name', component: DisplayComponent },
  { path: 'index', component: InitialListEventComponent  },
  { path: 'list', component: EventsListComponent },
  { path: 'events',
   loadChildren: () => import('./events/events.module').then(m => m.EventsModule) },


  ];  
=======

  { path: 'signup', component: SignUpComponent },
  { path: 'auth', component: AuthenticationinterfaceComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'offers', component:AfficherOffreComponent},
  { path: 'addoffer', component:AjouterOffreComponent},
  { path: 'offers/:id', component:DetailOffreComponent},
  { path: 'modifier/:id', component:ModifierOfferComponent},
  { path: 'offer/applications/:id', component:AfficherCandidatureComponent}, //exhibitor accep/refuse candidature
  { path: 'myapplications', component:AfficherCandidatursUserComponent},

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
>>>>>>> main

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
   
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
