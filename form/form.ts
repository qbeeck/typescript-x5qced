import { FormControl } from '../form-controls';
import { FormMemento } from './form-memento';

/**
 * Composite Pattern
 *
 * Form
 *   - QuestionFormControl
 *   - SectionFormControl
 *      - FormControl
 *      - FormControl
 */
export class Form {
  private _title = '';
  private _controls: FormControl[] = [];

  setTitle(title: string): void {
    this._title = title;
  }

  addControl(control: FormControl): void {
    this._controls.push(control);
  }

  isFormCompleted(): boolean {
    if (this._controls.length === 0) return true;

    return this._controls.every((control) => control.isAnswered());
  }

  saveState(): FormMemento {
    const clonedControls = structuredClone(this._controls);

    return new FormMemento(clonedControls);
  }

  restoreState(memento: FormMemento): void {
    this._controls = memento.controls;
  }
}
