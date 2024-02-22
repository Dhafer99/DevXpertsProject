import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ForumService } from '../services/forum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {

  

  constructor(
    private router: Router,
    private service: ForumService,

  ){}

 
 
}
