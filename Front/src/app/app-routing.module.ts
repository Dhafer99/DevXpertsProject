import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';



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
 
  
  { path: 'exhibitor/front', component: ExhibitorReservationComponent }
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
