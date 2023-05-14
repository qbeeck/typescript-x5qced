import { Form } from '../form';
import { FormControl } from './form-control';
import { SectionFormControl } from './section-form-control';

interface IIterator {
  hasNext(): boolean;
  next(): FormControl;
}

/**
 * Iterator pattern
 */
export class FormControlIterator implements IIterator {
  private _index = 0;
  private readonly _formControls: FormControl[];

  constructor(form: Form) {
    const formControls = form.controls.reduce((acc, cur) => {
      if (cur instanceof SectionFormControl) {
        cur.controls.forEach((control) => acc.push(control));
      } else {
        acc.push(cur);
      }

      return acc;
    }, []);

    this._formControls = formControls;
  }

  hasNext(): boolean {
    return this._index < this._formControls.length;
  }

  next(): FormControl {
    return this._formControls[this._index++];
  }
}
