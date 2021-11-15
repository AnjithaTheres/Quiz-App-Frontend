import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public quiz =[
    {
      qId : 2,
      title :'Basic Java Quiz',
      description:'Java is a class-based object-oriented programming language for building web and desktop applications. It is the most popular programming language and the language of choice for Android programming.',
      maxMarks:10,
      NumberofQuestions:10
    }
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onquestions(){
    this.router.navigate(["/questions"]);
 
}
}
