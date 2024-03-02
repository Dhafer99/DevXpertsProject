import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListUsersComponent } from 'projects/back-office/src/app/list-users/list-users.component';

import { SupplierFrontComponent } from './supplier-front/supplier-front.component';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from '../../projects/back-office/src/app/supplier/supplier.component';
export * from '../../projects/back-office/src/app/app.module'; // <==== THAT WAS MISSING
export * from '../../projects/back-office/src/app/supplier/supplier.component';
const routes: Routes = [  
  { 
    path: 'supplierfront', 
    children: [
      {
        path: 'front',
        children: [
          {
            path: '',    
            component: SupplierFrontComponent
          }
        ]
      }
    ]
  }
        ,
  //{ path: 'supplierfront', component: SupplierFrontComponent },
  { path: 'profile/prof', component: ProfileComponent },
  //{ path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app-routing.module').then(m => m.AppRoutingModule) }

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
