import { Injectable, Output, EventEmitter } from '@angular/core';
import { ModalInfo } from '@framework/models';
import { UtilityHelper } from '@framework/utilities';

@Injectable()
export class ModalService {

  public modals: Array<ModalInfo> = [];

  @Output() showModalSubject: EventEmitter<ModalInfo> = new EventEmitter<ModalInfo>();
  @Output() closeModalSubject: EventEmitter<ModalInfo> = new EventEmitter<ModalInfo>();

  constructor(private utilityHelper: UtilityHelper) {
    
  }

  public showModal(modalInfo: ModalInfo) { 
    if (this.modals.findIndex(modal => modal.id === modalInfo.id) === -1) {      
      this.modals.push(modalInfo);
    }    
    this.showModalSubject.emit(modalInfo);
    return modalInfo;
  }

  public closeModal(id: string, data?: any) {
    const index = this.modals.findIndex(modal => modal.id === id);
    if (index > -1) {      
      this.modals[index].onClosed.emit(data);      
      this.closeModalSubject.emit(this.modals[index]);
      this.modals.splice(index, 1);
    }    
  }
  
  public modalShown(id: string, data?: any) {
    const index = this.modals.findIndex(modal => modal.id === id);
    if (index > -1) {
      this.modals[index].onShown.emit(data);
    }
  }  
}