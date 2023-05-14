export abstract class FormControl {
  protected _type: string;

  constructor(type: string) {
    this._type = type;
  }

  abstract isAnswered(): boolean;
  abstract answer(value: string): void;
  abstract answer(value: Date): void;

  get type(): string {
    return this._type;
  }
}
