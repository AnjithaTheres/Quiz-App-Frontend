import { Quiz} from '../app/Quiz';

export class Question{
    quiz: any;
    constructor(public id: number, public question: string, public option1: string, public option2: string, public option3: string, public option4: string, public answer: string ,public givenAnswer: string,public length: number ,public quizes: Quiz[]){

    }
}