import {
  FormControl,
  QuestionFormControl,
  SectionFormControl,
  SelectDateFormControl,
} from '../form-controls';
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

  setControl(control: FormControl): FormBuilder {
    this._form.addControl(control);
    return this;
  }

  setControls(controls: FormControl[]): FormBuilder {
    controls.forEach((control) => this._form.addControl(control));
    return this;
  }

  reset(): FormBuilder {
    this._form = new Form();
    return this;
  }

  build(): Form {
    return this._form;
  }
}

export class FormBuilderDirector {
  private readonly _builder = new FormBuilder();

  emptyForm(): Form {
    return this._builder.reset().build();
  }

  exampleForm(): Form {
    const section = new SectionFormControl().setTitle('Section Title Example');
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

    return this._builder
      .setTitle('Example Form Template')
      .setControls([section, selectDate1, selectDate2])
      .build();
  }
}
