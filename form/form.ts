import { FormControl } from '../form-controls';
import { Observer } from '../observer';
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
  private _observers: Observer[] = [];

  get controls() {
    return this._controls;
  }

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

  submit(): void {
    if (!this.isFormCompleted()) return;

    console.log('Form submited');
    console.log(this._observers);
    this.notifyAll();
  }

  restoreState(memento: FormMemento): void {
    this._controls = memento.controls;
  }

  subscribe(observer: Observer): void {
    this._observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this._observers = this._observers.filter((obs) => obs !== observer);
  }

  notifyAll(): void {
    this._observers.forEach((obs) => obs.submit(this));
  }
}
