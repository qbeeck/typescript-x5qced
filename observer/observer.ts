import { Form } from '../form';

export interface Observer {
  submit(form: Form): void;
}

/*
 * Observer Pattern
 */
export class FormSubmitObserver implements Observer {
  submit(form: Form): void {
    console.log('| FormSubmitObserver | Form was submited');
  }
}
