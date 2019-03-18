import { IComponentModalBase } from '../interfaces/IComponentModalBase';
import { ComponentBase } from './ComponentBase';
import { EventEmitter } from '@angular/core';
import { ModalInfo } from '@framework/models';
export abstract class ComponentModalBase extends ComponentBase implements IComponentModalBase {
  
  public onClose: EventEmitter<ModalInfo> = new EventEmitter<ModalInfo>(); 
  
  constructor(){
    super();
  }
}