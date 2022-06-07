import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from '../model/question';
import { QUESTIONS } from '../model/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private currentQuestion: Question;
  private currentQuestion$: BehaviorSubject<Question>;
  private summary: Question[];
  private summary$: BehaviorSubject<Question[]>;
  private isQuizOver: boolean;
  private isQuizOver$: BehaviorSubject<boolean>;
  
  private currentQuestionIndex: number;

  constructor() { 
    this.currentQuestionIndex = 0;
    this.currentQuestion = QUESTIONS[this.currentQuestionIndex];
    this.summary = [];
    this.isQuizOver = false;
    this.currentQuestion$ = new BehaviorSubject<Question>(this.currentQuestion);
    this.summary$ = new BehaviorSubject<Question[]>(this.summary);
    this.isQuizOver$ = new BehaviorSubject<boolean>(this.isQuizOver);
  }

  userSelectAnswer(answer :string){    
    let answerIndex = this.currentQuestion.answers.indexOf(answer);
    this.currentQuestion.userAnswer = answerIndex;
    
    this.summary.push(this.currentQuestion);
    this.currentQuestionIndex++;
    this.currentQuestion = QUESTIONS[this.currentQuestionIndex];
    this.isQuizOver = this.currentQuestionIndex >= QUESTIONS.length;
    this.isQuizOver$.next(this.isQuizOver);

    if (!this.isQuizOver) {
      this.currentQuestion$.next(this.currentQuestion);
    }
  }

  getQuestion(): Observable<Question> {
    return this.currentQuestion$.asObservable();
  }

  getSummary(): Observable<Question[]> {
    return this.summary$.asObservable();
  }

  getIsQuizOver(): Observable<boolean> {
    return this.isQuizOver$.asObservable();
  }

}
