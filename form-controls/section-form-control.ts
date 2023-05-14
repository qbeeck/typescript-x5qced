import { FormControl } from './form-control';

export class SectionFormControl extends FormControl {
  private _title = '';
  private _controls: FormControl[] = [];

  constructor() {
    super('section');
  }

  setTitle(title: string): SectionFormControl {
    this._title = title;

    return this;
  }

  addControl(control: FormControl): SectionFormControl {
    this._controls.push(control);

    return this;
  }

  addControls(controls: FormControl[]): SectionFormControl {
    this._controls = [...this._controls, ...controls];

    return this;
  }

  isAnswered(): boolean {
    if (this._controls.length === 0) return true;

    return this._controls.every((control) => control.isAnswered());
  }
}
