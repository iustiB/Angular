import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-question-reader',
  templateUrl: './question-reader.component.html',
  styleUrls: ['./question-reader.component.css']
})
export class QuestionReaderComponent implements OnInit {

  value!: Question;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService
        .getQuestion()
        .subscribe(val => this.value = val)
  }

  onSelectAnswer(answer: string) {
    this.questionsService.userSelectAnswer(answer);
  }

}
