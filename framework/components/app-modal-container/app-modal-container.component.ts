import { Component, SimpleChanges } from '@angular/core';
import { ComponentControlBase } from '@framework/base';
import { ModalService } from '@framework/services';
import { Subscription } from 'rxjs';
import { ModalInfo } from '@framework/models';

@Component({
  selector: 'app-modal-container',
  templateUrl: './app-modal-container.component.html',
  styleUrls: ['./app-modal-container.component.scss']
})
export class AppModalContainerComponent extends ComponentControlBase {
   

  private showModalSubscription: Subscription;
  private closeModalSubscription: Subscription;
  public modals: Array<ModalInfo> = [];  

  constructor(private modalService: ModalService) {
    super();    
  }

  protected onInit(): void {
    this.showModalSubscription = this.modalService.showModalSubject.subscribe((modalInfo: ModalInfo) => {
      // console.log(modalInfo);
      if (modalInfo) {
        this.modals.push(modalInfo);
      }
    });
    
    this.closeModalSubscription = this.modalService.closeModalSubject.subscribe((modalInfo: ModalInfo) => {
      // console.log(modalInfo);
      if (modalInfo) {
        const index = this.modals.findIndex(modal => modal.id === modalInfo.id);
        this.modals.splice(index, 1);
      }
    });
    
  }
  protected onDestroy(): void {
    this.showModalSubscription.unsubscribe();
    this.closeModalSubscription.unsubscribe();
  }
  protected onChanges(changes: SimpleChanges): void {
    
  }
  protected onDoCheck(): void {
    
  }
  protected onAfterContentInit(): void {
    
  }
  protected onAfterContentChecked(): void {
    
  }
  protected onAfterViewInit(): void {
    
  }
  protected onAfterViewChecked(): void {
    
  }

  public focus(): void {
    
  } 

}
