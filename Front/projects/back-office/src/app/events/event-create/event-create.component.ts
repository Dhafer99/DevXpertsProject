import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { EventType } from '../../models/event';
import { Image } from '../../models/image';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css'],
})
export class EventCreateComponent implements OnInit {
  @Input() x!: string;
  image: File | null = null;
  imageMin: File | null = null;
  images: Image[] = [];
  uploadingFile:boolean=false;
  mainImage: Image = new Image();
  mainImageAdded: boolean = false;
  id: any;
  newForm!: FormGroup;

  eventType = EventType;

  constructor(
    private router: Router,
    private acr: ActivatedRoute,
    private eventService: EventService
  ) {}
  ngOnInit(): void {
    this.fetchImages();
    // this.id=this.acr.snapshot.params["id"];
    this.newForm = new FormGroup({
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      date:new FormControl('',[Validators.required]),

    });
    throw new Error('Method not implemented.');
  }
   get Name(){ return this.newForm.get("name");}
  get Type(){ return this.newForm.get("type");}
   get Date(){ return this.newForm.get("date");}
 
  goToEventDisplay() {
    this.router.navigate(['/events/display']);
  }
  add() {
    if (this.mainImageAdded)
    {
      this.eventService
      .addEvent(this.newForm.value, this.images, this.mainImage)
      .subscribe((response) => {
        console.log(response);
        console.log('classroom' + JSON.stringify(this.newForm.value));
      });
    }
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

  onUploadImages() {
    this.uploadingFile=true;
    if (this.image) {
      this.eventService.upload(this.image).subscribe(
        (data) => {
          this.images.push(data);
          console.log(data);
          this.uploadingFile=false;
        },
        (err) => {
          this.reset();
          this.uploadingFile=false;
        }
      );
    }
  }
  onUploadMainImage() {
    this.uploadingFile=true;
    if (this.image) {
      this.eventService.uploadForEvent(this.image,-1).subscribe(
        (data) => {
          this.mainImage = data;
          this.mainImageAdded = !this.mainImageAdded;
          console.log(data);
          this.uploadingFile=false;
        },
        (err) => {
          this.reset();
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

  fetchImages() {
    this.uploadingFile=true;
    this.eventService.imagesForEvent(0).subscribe(
      (images) => {
        this.images = images;
        this.uploadingFile=false;
      },
      (error) => {
        this.uploadingFile=false;
        console.error('Error fetching images:', error);
      }
    );
  }

  deleteImage(id: any): void {
    this.eventService.delete(id).subscribe(
      () => {
        this.fetchImages();
        console.log('Image Deleted');
      },
      (error) => {
        console.error('Error deleting image:', error);
      }
    );
  }
  deleteMainImage(id: any): void {
    this.eventService.delete(id).subscribe(
      () => {
       this.mainImage=new Image()
       this.mainImageAdded=!this.mainImageAdded;
        console.log('Image Deleted');
      },
      (error) => {
        console.error('Error deleting image:', error);
      }
    );
  }



}
