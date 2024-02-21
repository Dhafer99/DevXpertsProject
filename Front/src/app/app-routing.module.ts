import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ListPacksComponent } from './PackageManagementUser/list-packs/list-packs.component';
import { DetailPackComponent } from './PackageManagementUser/detail-pack/detail-pack.component';
import { MyPacksComponent } from './PackageManagementUser/my-packs/my-packs.component';
import { RoomsListComponent } from './RoomManagementUser/rooms-list/rooms-list.component';

const routes: Routes = [  

  { path: 'profile', component: ProfileComponent },
  { path: 'ListPacks', component: ListPacksComponent },
  { path: 'ListPacks/DetailPack/:typePack', component: DetailPackComponent },
  { path: 'MyPacks', component: MyPacksComponent },
  { path: 'ListPacks/ListRooms', component: RoomsListComponent },

  { path: 'backoffice', loadChildren: () => import('../../projects/back-office/src/app/app.module').then(m => m.AppModule) }
  

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
