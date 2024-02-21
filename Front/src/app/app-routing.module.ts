import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListPacksComponent } from './PackageManagementUser/list-packs/list-packs.component';
import { DetailPackComponent } from './PackageManagementUser/detail-pack/detail-pack.component';
import { MyPacksComponent } from './PackageManagementUser/my-packs/my-packs.component';

const routes: Routes = [  

  { path: 'profile', component: ProfileComponent },
  { path: 'ListPacks', component: ListPacksComponent },
  { path: 'DetailPack', component: DetailPackComponent },
  { path: 'MyPacks', component: MyPacksComponent },
  { path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app.module').then(m => m.AppModule) }
  

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
