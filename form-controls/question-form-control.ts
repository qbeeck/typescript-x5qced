import { FormControl } from './form-control';

export class QuestionFormControl extends FormControl {
  private _question = '';
  private _answer = '';

  constructor() {
    super('question');
  }

  get question() {
    return this._question;
  }

  setQuestion(question: string): QuestionFormControl {
    this._question = question;

    return this;
  }

  answer(questionAnswer: string): void {
    if (!questionAnswer) return;

    this._answer = questionAnswer;
  }

  isAnswered(): boolean {
    return !!this._answer;
  }
}
