
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherOfferAdminComponent } from './offer/afficher-offer-admin/afficher-offer-admin.component';
import { AfficherCandidatureOffreAdminComponent } from './offer/afficher-candidature-offre-admin/afficher-candidature-offre-admin.component';
import { StatAdminCandidatureComponent } from './stat/stat-admin-candidature/stat-admin-candidature.component';
import { SupplierComponent } from './supplier/supplier.component';
import { BoothplacementComponent } from './boothplacement/boothplacement.component';
import { DialogboxComponent } from './boothplacement/dialogbox/dialogbox.component';
import { SupplyRequestsDashboardComponent } from './supply-requests-dashboard/supply-requests-dashboard.component';
import { MessagestestComponent } from './messagestest/messagestest.component';
import { NewsupplyrequestsdashboardComponent } from './newsupplyrequestsdashboard/newsupplyrequestsdashboard.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { SupplyRequestDetailsComponent } from './supply-request-details/supply-request-details.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddPackComponent } from './PackManagementAdmin/add-pack/add-pack.component';
import { ViewPackComponent } from './PackManagementAdmin/view-pack/view-pack.component';
import { UpdatePackComponent } from './PackManagementAdmin/update-pack/update-pack.component';
import { HistoriquePacksComponent } from './PackManagementAdmin/historique-packs/historique-packs.component';
import { CommonModule } from '@angular/common';
import { ViewRoomsComponent } from './RoomManagement/view-rooms/view-rooms.component';
import { DetailRoomComponent } from './RoomManagement/detail-room/detail-room.component';
import { PackSalesPerYearComponent } from './PackManagementAdmin/pack-sales-per-year/pack-sales-per-year.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { AuthGuard } from '../../../../src/app/auth.guard';
const routes: Routes = [ 
      { path: 'list', component: ListUsersComponent ,canActivate: [AuthGuard]},
      { path: 'admin/offers', component: AfficherOfferAdminComponent ,canActivate: [AuthGuard]},
      { path: 'admin/offer/candidatures/:id', component: AfficherCandidatureOffreAdminComponent ,canActivate: [AuthGuard]},
      { path: 'admin/stat',component: StatAdminCandidatureComponent ,canActivate: [AuthGuard]},
      {path : 'supplier/:id',component: SupplierComponent,canActivate: [AuthGuard]},
      {path : 'supplier',component: SupplierComponent,canActivate: [AuthGuard]},
      {path : 'booth',component: BoothplacementComponent,canActivate: [AuthGuard]},
      {path : 'detail',component: SupplierDetailComponent,canActivate: [AuthGuard]},
      
      {path : 'message',component: MessagestestComponent,canActivate: [AuthGuard]},
      {path: 'dialog',
      component: DialogboxComponent
      ,canActivate: [AuthGuard]
    },
    {path: 'boothDashboard',
      component: SupplyRequestsDashboardComponent
      ,canActivate: [AuthGuard]
    },
    {path: 'newDashboard',
      component: NewsupplyrequestsdashboardComponent
      ,canActivate: [AuthGuard]
    },
    {path: 'supplyRequestDetails',
      component: SupplyRequestDetailsComponent
      ,canActivate: [AuthGuard]
    },
    {path: 'supplyRequestDetails/:id',
    component: SupplyRequestDetailsComponent
    ,canActivate: [AuthGuard]
  },
  {path: 'auth',
    component: AuthentificationComponent,
  }
    ,  
    { path: 'list', component: ListUsersComponent ,canActivate: [AuthGuard]},
    { path: 'addPack', component: AddPackComponent ,canActivate: [AuthGuard]},
    { path: 'viewPack', component: ViewPackComponent ,canActivate: [AuthGuard]},
    { path: 'viewPack/detail/:id', component: UpdatePackComponent ,canActivate: [AuthGuard]},
    { path: 'HistoriquePacks', component: HistoriquePacksComponent ,canActivate: [AuthGuard]},
    { path: 'viewRooms', component: ViewRoomsComponent ,canActivate: [AuthGuard]},
    { path: 'viewRooms/detailRoom/:id', component: DetailRoomComponent ,canActivate: [AuthGuard]},
    { path: 'packSalesPerYear', component: PackSalesPerYearComponent ,canActivate: [AuthGuard]},
    { path: 'checkPayments', component: PaymentListComponent ,canActivate: [AuthGuard]}, 
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  

  exports: [RouterModule]
})
export class AppRoutingModule { }
