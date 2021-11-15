import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [{path :'login',component:LoginComponent} ,
{path :'quiz',component:QuizComponent},

{path: 'add-question', component: AddQuestionsComponent},
{path: 'home', component: HomeComponent},
{path: 'questions', component: QuestionsComponent},
{path : '', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
