import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  [x: string]: any;
 
  constructor(private http: HttpClient) { }
  fetchAllQuestions(){
    return this.http.get('http://localhost:8484/questions/');
  }
  deleteQuestions(id: number){
    return this.http.delete( 'http://localhost:8484/questions/' + id)
  }
  addQuestion(question: any){
    return this.http.post('http://localhost:8484/questions/', question)
 }
}
