
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
import { ClaimBackofficeComponent } from './claim-backoffice/claim-backoffice.component';
import { AddPackComponent } from './PackManagementAdmin/add-pack/add-pack.component';
import { ViewPackComponent } from './PackManagementAdmin/view-pack/view-pack.component';
import { UpdatePackComponent } from './PackManagementAdmin/update-pack/update-pack.component';
import { HistoriquePacksComponent } from './PackManagementAdmin/historique-packs/historique-packs.component';
import { CommonModule } from '@angular/common';
import { ViewRoomsComponent } from './RoomManagement/view-rooms/view-rooms.component';
import { DetailRoomComponent } from './RoomManagement/detail-room/detail-room.component';
import { PackSalesPerYearComponent } from './PackManagementAdmin/pack-sales-per-year/pack-sales-per-year.component';
import { PaymentListComponent } from './payment-list/payment-list.component';


const routes: Routes = [ 
      { path: 'claims', component: ClaimBackofficeComponent },
      { path: 'list', component: ListUsersComponent },
      { path: 'admin/offers', component: AfficherOfferAdminComponent },
      { path: 'admin/offer/candidatures/:id', component: AfficherCandidatureOffreAdminComponent},
      { path: 'admin/stat',component: StatAdminCandidatureComponent},
      {path : 'supplier/:id',component: SupplierComponent},
      {path : 'supplier',component: SupplierComponent},
      {path : 'booth',component: BoothplacementComponent},
      {path : 'detail',component: SupplierDetailComponent},
      
      {path : 'message',component: MessagestestComponent},
      {path: 'dialog',
      component: DialogboxComponent,
    },
    {path: 'boothDashboard',
      component: SupplyRequestsDashboardComponent,
    },
    {path: 'newDashboard',
      component: NewsupplyrequestsdashboardComponent,
    },
    {path: 'supplyRequestDetails',
      component: SupplyRequestDetailsComponent,
    },
    {path: 'supplyRequestDetails/:id',
    component: SupplyRequestDetailsComponent,
  },
  {path: 'auth',
    component: AuthentificationComponent,
  }
    ,  
    { path: 'list', component: ListUsersComponent },
    { path: 'addPack', component: AddPackComponent },
    { path: 'viewPack', component: ViewPackComponent },
    { path: 'viewPack/detail/:id', component: UpdatePackComponent },
    { path: 'HistoriquePacks', component: HistoriquePacksComponent },
    { path: 'viewRooms', component: ViewRoomsComponent },
    { path: 'viewRooms/detailRoom/:id', component: DetailRoomComponent },
    { path: 'packSalesPerYear', component: PackSalesPerYearComponent },
    { path: 'checkPayments', component: PaymentListComponent }, 
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  

  exports: [RouterModule]
})
export class AppRoutingModule { }
