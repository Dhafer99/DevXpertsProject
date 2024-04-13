import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizListComponent } from 'projects/back-office/src/app/Appointment/quiz-list/quiz-list.component';
import { ClassroomService } from 'projects/back-office/src/app/services/classroom.service';

@Component({
  selector: 'app-generalquizinterface',
  templateUrl: './generalquizinterface.component.html',
  styleUrls: ['./generalquizinterface.component.css']
})
export class GeneralquizinterfaceComponent implements OnInit{



  
 
   quizItems : any[];  
  constructor(private classRoomS:ClassroomService, private router: Router) {}
  
  ngOnInit(): void {
      this.classRoomS.getAllQuiz().subscribe((data)=>{
        console.log(data)
      this.quizItems=data ;



    })
  }
  passStringToQuestions(quizName: string) {
    this.router.navigate(['/quiztest', { quizName: quizName }]);
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


