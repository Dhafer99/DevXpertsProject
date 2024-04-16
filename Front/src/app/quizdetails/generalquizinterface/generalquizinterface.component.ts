import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizListComponent } from 'projects/back-office/src/app/Appointment/quiz-list/quiz-list.component';
import { Result } from 'projects/back-office/src/app/models/appointement';
import { Quiz } from 'projects/back-office/src/app/models/quiz';
import { ClassroomService } from 'projects/back-office/src/app/services/classroom.service';

@Component({
  selector: 'app-generalquizinterface',
  templateUrl: './generalquizinterface.component.html',
  styleUrls: ['./generalquizinterface.component.css']
})
export class GeneralquizinterfaceComponent implements OnInit{


  passingQuiz:boolean=false;
  resultDisplay:boolean=false;
  currentQuiz!:Quiz;
  result:Result
  userId:number=2
   quizItems : any[];  
  constructor(private classRoomS:ClassroomService, private router: Router,private acr:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.acr.params.subscribe(params => {
      let id = params['id'];
      if (id==0)
        id=this.userId;
      this.classRoomS.getAllQuiz(id).subscribe((data)=>{
        console.log(data)
      this.quizItems=data ;
    })
  })
}
  passStringToQuestions(quiz: any) {
    //this.router.navigate(['/quiztest', { quizName: quizName }]);
    this.currentQuiz=quiz 
    this.passingQuiz=!this.passingQuiz;
    
  }

  handleFinishquiz(result:Result) {
    this.passingQuiz=!this.passingQuiz;
    this.result=result;
    this.resultDisplay=!this.resultDisplay;
  }
  handleFinishResult() {
    this.resultDisplay=!this.resultDisplay;
    
  }
  getAllcategory(id :Number){
    this.router.navigate(['/all_category',id]);
    
    }



    dealeteQuiz(id: number) {
      this.classRoomS.deleteQuiz(id).subscribe(()=>{

        location.reload();
      }
  
      )

    
      }

      QuizDetail(id: number) {
        this.router.navigate(['/quizdetail', id]);
        }
}


