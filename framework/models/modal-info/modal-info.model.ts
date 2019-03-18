import { Type, EventEmitter } from '@angular/core';
import { ModelBase } from '@framework/base/models';

export class ModalInfo extends ModelBase {  
  public id: string;
  public type: Type<any>;
  public data: any;
  public onShown: EventEmitter<any> = new EventEmitter<any>();
  public onClosed: EventEmitter<any> = new EventEmitter<any>();
  constructor(init?: Partial<ModalInfo>) {
    super();
    Object.assign(this, init);
  }  
}