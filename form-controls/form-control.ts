export abstract class FormControl {
  protected _type: string;

  constructor(type: string) {
    this._type = type;
  }

  abstract isAnswered(): boolean;

  get type(): string {
    return this._type;
  }
}
