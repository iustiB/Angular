import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizOverComponent } from './components/quiz-over/quiz-over.component';
import { SummaryComponent } from './components/summary/summary.component';
import { QuestionReaderComponent } from './components/question-reader/question-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizOverComponent,
    SummaryComponent,
    QuestionReaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
