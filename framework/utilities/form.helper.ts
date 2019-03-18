import { Injectable } from '@angular/core';
@Injectable()
export class FormHelper {
  constructor() {}

  public unsubscription(component: any) {
    for (let propertyName in component) {
      const propertyValue = component[propertyName];
      if (propertyValue && typeof propertyValue['unsubscribe'] === 'function') {
        propertyValue.unsubscribe();
      }
    }
  }
}
