import { FormControl } from '../form-controls';
import { Form } from './form';

/**
 * Memento Pattern
 */
export class FormMemento {
  private readonly _controls: FormControl[];

  constructor(controls: FormControl[]) {
    this._controls = controls;
  }

  get controls(): FormControl[] {
    return this._controls;
  }
}

export class FormMementoCareTaker {
  private _mementos: FormMemento[];

  private readonly _form: Form;

  constructor(form: Form) {
    this._mementos = [];

    this._form = form;
  }

  backup(): void {
    this._mementos.push(this._form.saveState());
  }

  undo(): void {
    if (!this._mementos.length) return;

    const memento = this._mementos.pop();
    this._form.restoreState(memento);
  }
}
