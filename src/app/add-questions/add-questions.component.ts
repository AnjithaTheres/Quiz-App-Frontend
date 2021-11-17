import { Component, OnInit } from '@angular/core';
import { Question } from '../Question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {


  constructor(private questionService: QuestionService,private router:Router) { }
  ngOnInit(): void {
   
  }

    addQuestion(question: string, option1: string, option2: string,option3: string,option4: string,answer: string){

      this.questionService.addQuestion({question,option1,option2,option3,option4,answer})
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(["/questions"]);
        // this.courses = res;
      });
    }
  }


