import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { EventType } from '../../models/event';
import { Image } from '../../models/image';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  @Input () x!:string;
  image: File | null = null;
  imageMin: File | null = null;
  images: Image[] = [];

  id:any; 
  myform!:FormGroup;

  eventType= EventType

  constructor(private router: Router,private acr:ActivatedRoute,private eventService:EventService) {}
  ngOnInit(): void {
    this.fetchImages();
   // this.id=this.acr.snapshot.params["id"];  
    this.myform=new FormGroup({
       type:new FormControl('',[Validators.required]),
       name:new FormControl ('',[Validators.required,Validators.minLength(6)]),
      // date:new FormControl('',[Validators.required]),
      // disableDate:new FormControl('',[Validators.required]),

    })
    throw new Error('Method not implemented.');
  }


  goToEventDisplay() {
    this.router.navigate(['/events/display']);
  }
  add(){
    this.eventService.addEvent(this.myform.value).subscribe ((response)=>{
        console.log(response)
      console.log("classroom"+JSON.stringify(this.myform.value))})
    }

    onFileChange(event: any) {
      this.image = event.target.files[0];
      this.imageMin = null;
      const fr = new FileReader();
      fr.onload = (evento: any) => {
        this.imageMin = evento.target.result;
      };
      if (this.image) {
        fr.readAsDataURL(this.image);
      }
    }
  
    onUpload(): void {
      if (this.image) {
        this.eventService.upload(this.image).subscribe(
          data => {
            this.fetchImages();
          },
          err => {
            this.reset();
            this.fetchImages();
          }
        );
      }
    }
  
    reset(): void {
      this.image = null;
      this.imageMin = null;
      const imageInputFile = document.getElementById('image') as HTMLInputElement;
      if (imageInputFile) {
        imageInputFile.value = '';
      }
    }
  
    fetchImages(): void {
      this.eventService.list().subscribe(
        (images) => {
          this.images = images;
        },
        (error) => {
          console.error('Error fetching images:', error);
        }
      );
    }
  
    deleteImage(id: any): void {
    
    
          this.eventService.delete(id).subscribe(
            () => {
              this.fetchImages();
             console.log("Image Deleted")
      
            },
            error => {
              console.error('Error deleting image:', error);
            })
         
      
    }
  }
  

