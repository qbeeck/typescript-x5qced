import { DevelopEnvironment, Environment, ProductionEnvironment } from './core';
import { FormBuilder, FormBuilderDirector } from './form';

const environment = Environment.getInstance();

// const prodEnv = new ProductionEnvironment();
// environment.setEnvironment(prodEnv);

const developEnv = new DevelopEnvironment();
environment.setEnvironment(developEnv);

const formBuilder = new FormBuilder();
const formBuilderDirector = new FormBuilderDirector();

const test = formBuilderDirector.exampleForm();
console.log(test);