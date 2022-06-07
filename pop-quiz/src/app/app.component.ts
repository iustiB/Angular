import { Component, OnInit } from '@angular/core';
import { Question } from './model/question';
import { QUESTIONS } from './model/questions';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

   isQuizOver: boolean;

   constructor(private questionsService: QuestionsService) {
    this.isQuizOver = false;
  }

  ngOnInit(): void {
    this.questionsService.getIsQuizOver().subscribe(val => this.isQuizOver=val);
  }
}
