import { Question } from "./question";

export const QUESTIONS: Question[] = [
    {
        caption: 'A?',
        answers: ['A', 'B', 'C', 'D'],
        correctAnswer: 0,
        userAnswer: -1
    },
    {
        caption: 'B?',
        answers: ['A', 'B', 'C', 'E'],
        correctAnswer: 1,
        userAnswer: -1
    },
    {
        caption: 'C?',
        answers: ['A', 'E', 'C', 'D'],
        correctAnswer: 2,
        userAnswer: -1
    },
    {
        caption: 'D?',
        answers: ['A', 'E', 'C', 'D'],
        correctAnswer: 3,
        userAnswer: -1
    },
]