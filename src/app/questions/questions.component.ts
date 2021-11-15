import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Question } from '../Question';
import { QuestionService } from '../question.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public questions: Array<Question> = []
  public currentQuestion : number=0;
  marksGot = 0;
  correctAnswers = 0;


  isSubmit = false;

  
 
  
  constructor(private questionService:QuestionService,
    private router:Router, private locationSt: LocationStrategy,
    private _route: ActivatedRoute,) { }

  ngOnInit(): void {
    
    this.questionService.fetchAllQuestions()
      .subscribe((res: any) => {
  this.questions = res;
  console.log(res);
  console.log("Working")
  });
}
  deleteQuestion(id: number) {
    this.questionService.deleteQuestions(id)
      .subscribe((res: any) => {
        console.log(res);
        // this.courses = res;
        let remainingQuestions = this.questions.filter(question => question.id != id)
        this.questions = remainingQuestions;
      

      })
}
onsubmit(){
  this.router.navigate(["/add-question"]);

}

submitQuiz() {
  // this.router.navigate(["/result"]);
  Swal.fire({
    title: 'Do you want to submit the quiz?',
    showCancelButton: true,
    confirmButtonText: `Submit`,
    icon: 'info',
  }).then((question) => {
    if (question.isConfirmed) {
      this.isSubmit = true;
    this.questions.forEach((question) => {
      if (question.givenAnswer === question.answer) {
        this.correctAnswers++;
        this.marksGot=this.correctAnswers
        // let marksSingle =
        //   this.questions[0].quiz.maxMarks / this.questions.length;
        // this.marksGot += marksSingle;

      }
     
    
    });
    console.log('Correct Answers :' + this.correctAnswers);
    console.log('Marks Got:' + this.marksGot);
    
  }
    });
    
   
  }
    
  }

