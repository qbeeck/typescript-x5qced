import { FormControl } from './form-control';

export class SelectDateFormControl extends FormControl {
  private _title = '';
  private _answer: Date | null = null;

  constructor() {
    super('select-date');
  }

  get title(): string {
    return this._title;
  }

  setTitle(title: string): SelectDateFormControl {
    this._title = title;

    return this;
  }

  answer(date: Date): void {
    if (!date) return;

    this._answer = date;
  }

  isAnswered(): boolean {
    return !!this._answer;
  }
}
