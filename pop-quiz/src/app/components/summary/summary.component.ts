import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  questions!: Question[];
  
  constructor(private questionsService: QuestionsService) {

  }

  ngOnInit(): void {
    this.questionsService.getSummary().subscribe(val => this.questions = val);
  }

}
