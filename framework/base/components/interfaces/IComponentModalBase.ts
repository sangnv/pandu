import { IComponentBase } from './IComponentBase';
import { ModalInfo } from '@framework/models';
import { EventEmitter } from '@angular/core';

export interface IComponentModalBase
  extends IComponentBase {    
    onClose: EventEmitter<ModalInfo>
  }
