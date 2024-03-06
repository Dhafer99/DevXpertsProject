import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { PostListComponent } from './ForumManagement/post-list/post-list.component';
import { PostDetailComponent } from './ForumManagement/post-detail/post-detail.component';
import { ClaimFormComponent } from './ClaimManagement/claim-form/claim-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostFormComponent } from './ForumManagement/post-form/post-form.component';
import { CommonModule, DatePipe } from '@angular/common';
import Swal from 'sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PostListComponent,
    PostDetailComponent,
    PostFormComponent,
    ClaimFormComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    
  ],
  providers: [ 
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
