import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { SupplierComponent } from './supplier/supplier.component';
import { BoothplacementComponent } from './boothplacement/boothplacement.component';
import { DialogboxComponent } from './boothplacement/dialogbox/dialogbox.component';
import { SupplyRequestsDashboardComponent } from './supply-requests-dashboard/supply-requests-dashboard.component';
import { MessagestestComponent } from './messagestest/messagestest.component';
import { NewsupplyrequestsdashboardComponent } from './newsupplyrequestsdashboard/newsupplyrequestsdashboard.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';

const routes: Routes = [  { path: 'list', component: ListUsersComponent },
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
    }
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
