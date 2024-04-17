
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClassroomComponent } from './Appointment/classroom/classroom.component';
import { AfficherClassroomComponent } from './Appointment/afficher-classroom/afficher-classroom.component';
import { AddClassroomComponent } from './Appointment/add-classroom/add-classroom.component';
import { CalenderComponent } from './Appointment/calender/calender.component';
import { EventsComponent } from './events/events.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventsStatsComponent } from './events/events/events-stats/events-stats.component';
import { EventDisplayComponent } from './events/event-display/event-display.component';
import { ScanPressenceComponent } from './events/scan-pressence/scan-pressence.component';

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

const routes: Routes = [ 
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

    { path: 'list', component: ListUsersComponent },
{ path: 'classrooms', component: AfficherClassroomComponent },
{path: 'addclassroom', component: AddClassroomComponent },
{path: 'calender', component: CalenderComponent },
{path: 'create/:id', component: EventCreateComponent },
{path: 'details/:name', component: EventDisplayComponent },
{path: 'create', component: EventCreateComponent },
{path: 'Eventlist', component: EventListComponent },
{path: 'stats', component: EventsStatsComponent },
{path: 'scan/:id',component:ScanPressenceComponent},

{
  path: 'events',
  component: EventsComponent},

    { path: 'events/create/:id', component: EventCreateComponent },
    { path: 'events/create', component: EventCreateComponent },
    { path: 'events/Eventlist', component: EventListComponent },
    { path: 'events/stats', component: EventsStatsComponent },
    { path: 'events/""', pathMatch: 'full', redirectTo: '/events/create' },
    { path: 'events/**', component: EventCreateComponent },

     
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  

  exports: [RouterModule]
})
export class AppRoutingModule { }
