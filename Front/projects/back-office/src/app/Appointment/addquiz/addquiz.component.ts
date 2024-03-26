import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassroomService } from '../../services/classroom.service';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent {

  spinner=false;
  apiform!: FormGroup;
  selectedValue: number = 0;
  quizsbyapi: any[] = [];
  updateValue(value: any) {
    this.selectedValue = value.target.value;
  }
  lequestionbidou:any;
  constructor(private fb: FormBuilder, private quizservice: ClassroomService) { }
  ngOnInit(): void {
    this.apiform = this.fb.group({
      langue: ['fr'],
      choix: ['2'],
      categorie: ['0'],
      difficulte: ['0'],
      nbrquestions: ['10',Validators.required],
      anecdote: ['0'],
      wikipedia: ['0']
    });
  }
  test() {
    this.spinner=true;
    console.log(this.apiform.value);
// nahii ell commentaire 

   /*  this.url = this.openquizzdbAPI  + "&lang=" + this.apiform.value.langue
                                    + "&choice=" + this.apiform.value.choix
                                    + "&categ=" + this.apiform.value.categorie
                                    + "&diff=" + this.apiform.value.difficulte
                                    + "&anec=" + this.apiform.value.anecdote
                                    + "&wiki=" + this.apiform.value.wikipedia; */
    
    //console.log(this.url);
    for (let i = 1; i <= this.apiform.value.nbrquestions; i++) {
      this.quizservice.getaquestion(this.url).subscribe((response: any) => { 
          this.lequestionbidou = response.results; 
          this.quizsbyapi = this.quizsbyapi.concat(this.lequestionbidou); // Use concat to merge arrays properly
      });
  }
  
    console.log(this.quizsbyapi);
   this.quizservice.addQuizApi(this.quizsbyapi).subscribe(()=>{location.reload();}); 
  }

  /*  kii t pushii nahiiha  */
// nahii ell commentaire 
  
 /*  private openquizzdbAPI = 'https://api.openquizzdb.org/?key=F8K29TCVV6'; */
  private url: any



}
