import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { SupplierComponent } from './supplier/supplier.component';
import { BoothplacementComponent } from './boothplacement/boothplacement.component';
import { DialogboxComponent } from './boothplacement/dialogbox/dialogbox.component';
import { SupplyRequestsDashboardComponent } from './supply-requests-dashboard/supply-requests-dashboard.component';

const routes: Routes = [  { path: 'list', component: ListUsersComponent },
      {path : 'supplier/:id',component: SupplierComponent},
      {path : 'supplier',component: SupplierComponent},
      {path : 'booth',component: BoothplacementComponent},
      {path: 'dialog',
      component: DialogboxComponent,
    },
    {path: 'boothDashboard',
      component: SupplyRequestsDashboardComponent,
    }
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
