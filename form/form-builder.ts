import {
  FormControl,
  QuestionFormControl,
  SectionFormControl,
  SelectDateFormControl,
} from '../form-controls';
import { FormSubmitObserver, Observer } from '../observer';
import { Form } from './form';

/**
 * Builder Pattern
 */
export class FormBuilder {
  private _form = new Form();

  setTitle(title: string): FormBuilder {
    this._form.setTitle(title);
    return this;
  }

  addControl(control: FormControl): FormBuilder {
    this._form.addControl(control);
    return this;
  }

  addControls(controls: FormControl[]): FormBuilder {
    controls.forEach((control) => this._form.addControl(control));
    return this;
  }

  setObserver(observer: Observer): FormBuilder {
    this._form.subscribe(observer);
    return this;
  }

  reset(): FormBuilder {
    this._form = new Form();
    return this;
  }

  build(): Form {
    const form = this._form;
    this.reset();

    return form;
  }
}

export class FormBuilderDirector {
  private readonly _builder = new FormBuilder();

  exampleForm(): Form {
    const section = new SectionFormControl();

    const question1 = new QuestionFormControl().setQuestion(
      'Question #1 Example'
    );
    const question2 = new QuestionFormControl().setQuestion(
      'Question #2 Example'
    );
    section.addControls([question1, question2]);

    const selectDate1 = new SelectDateFormControl().setTitle(
      'Select Date Title Example'
    );
    const selectDate2 = new SelectDateFormControl().setTitle(
      'Select Date Title Example'
    );

    this._builder.addControls([section, selectDate1, selectDate2]);

    return this._builder
      .setTitle('Example Form Template')
      .setObserver(new FormSubmitObserver())
      .build();
  }
}
