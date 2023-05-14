import { DevelopEnvironment, Environment, ProductionEnvironment } from './core';
import { FormBuilder, FormBuilderDirector } from './form';
import { FormControlIterator } from './form-controls';

const environment = Environment.getInstance();

// const prodEnv = new ProductionEnvironment();
// environment.setEnvironment(prodEnv);

const developEnv = new DevelopEnvironment();
environment.setEnvironment(developEnv);

const formBuilder = new FormBuilder();
const formBuilderDirector = new FormBuilderDirector();

const form = formBuilderDirector.exampleForm();
console.log(form);

const formControlIterator = new FormControlIterator(form);
