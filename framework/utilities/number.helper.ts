import { Injectable } from '@angular/core';

@Injectable()
export class NumberHelper {
  constructor() {}

  public isNumber(value: any): boolean {
    const numb: any = parseInt(value);
    return typeof numb === 'number';
  }
}
