import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardActions, MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { QuestionsComponent } from './questions/questions.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import {MatRadioModule, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule} from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    
   
    HomeComponent,
  
    QuestionsComponent,
    AddQuestionsComponent
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
   FormsModule,
   BrowserAnimationsModule,
   MatCardModule,
   MatButtonModule,
   MatSelectModule,
   MatFormFieldModule,
   MatRadioModule,
   MatDividerModule,
   ReactiveFormsModule,
   HttpClientModule,
   MatIconModule,
   ReactiveFormsModule,
   ToastrModule.forRoot(),
  //  RouterTestingModule,
  
   
   

   
   
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}],
  bootstrap: [AppComponent],

})
export class AppModule { }
